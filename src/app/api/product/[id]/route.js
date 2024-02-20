import { PrismaClient } from "../../../../../prisma/generated/client";
import { NextResponse } from "next/server";

// Inisialisasi Prisma Client
const prisma = new PrismaClient();

// Definisi fungsi GET dengan parameter id
export async function GET(req, context) {
    try {
        const Id = Number(context.params.id) || 0;
        const produk = await prisma.produk.findUnique({
            where: {
                ProdukID: Id
            },
        });

        return NextResponse.json({
            success: true,
            message: "Data Found",
            data: produk,
        }, {
            status: 200,
        });
    } catch (error) {
        console.error("Error fetching product:", error);

        return NextResponse.json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        }, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
}

// api/reservasi/[id].js
import { PrismaClient } from "../../../../prisma/generated/client";
import { NextResponse } from "next/server";

// Inisialisasi Prisma Client
const prisma = new PrismaClient();

// Menampilkan
export async function GET(req, context) {
  try {
    const id = Number(context.params) || 0;
    const reservasi = await prisma.reservasi.findUnique({
      where: {
        ReservasiID: id
      },
    });

    return NextResponse.json({
      success: true,
      message: "Data Found",
      data: reservasi,
    }, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching reservation:", error);

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


// src/api/product.js
import { PrismaClient } from "../../../../prisma/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.produk.findMany({
      select: {
        ProdukID: true,
        NamaProduk: true,
        Deskripsi: true,
        Harga: true,
        Stok: true,
        Kategori: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "List Data",
      data: products,
    }, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching products:", error);

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

export async function POST(request) {
  try {
    const body = await request.json();
    const { ProdukID, NamaProduk, Deskripsi, Harga, Stok, Kategori } = body;

    const product = await prisma.produk.create({
      data: {
        ProdukID: ProdukID,
        NamaProduk: NamaProduk,
        Deskripsi: Deskripsi,
        Harga: Harga,
        Stok: Stok,
        Kategori: Kategori,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product added successfully",
      data: product,
    }, {
      status: 201,
    });
  } catch (error) {
    console.error("Error adding product:", error);

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

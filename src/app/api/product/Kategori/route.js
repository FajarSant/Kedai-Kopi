// Import PrismaClient dan NextResponse
import { PrismaClient } from "../../../../../prisma/generated/client";
import { NextResponse } from "next/server";

// Membuat instance PrismaClient
const prisma = new PrismaClient();

// Handler untuk mengambil jumlah produk berdasarkan kategori
export async function GET(req, context) {
  try {
    // Ambil data jumlah produk untuk setiap kategori
    const kategoriCounts = await prisma.produk.groupBy({
      by: ['Kategori'],
      _count: true,
    });

    // Tambahkan kategori "All" yang mencakup semua produk
    const allProductsCount = await prisma.produk.count();

    // Struktur respons JSON
    const responseData = [
      {
        kategori: "SEMUA PRODUK",
        jumlahProduk: allProductsCount,
      },
      ...kategoriCounts.map((kategoriCount) => ({
        kategori: kategoriCount.Kategori,
        jumlahProduk: kategoriCount._count,
      })),
    ];

    return NextResponse.json({
      success: true,
      message: "Data Found",
      data: responseData,
    }, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching product count:", error);

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

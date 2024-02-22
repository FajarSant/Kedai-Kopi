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
//Delete
export async function DELETE(req, context) {
    try {
      // Ambil ID dari context params
      const ProdukID = Number(context.params.id) || 0;
  
      // Periksa apakah produk dengan ID yang diberikan ada
      const existingProduct = await prisma.produk.findUnique({
        where: {
          ProdukID: ProdukID
        }
      });
  
      // Jika produk tidak ditemukan, kirim respons JSON dengan status 404
      if (!existingProduct) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
      }
  
      // Hapus produk berdasarkan ID
      const deletedProduct = await prisma.produk.delete({
        where: {
          ProdukID: ProdukID
        }
      });
  
      // Jika berhasil, kirim respons JSON kosong dengan status 200
      return NextResponse.json({}, { status: 200 });
    } catch (error) {
      console.error("Error deleting product:", error);
  
      // Jika terjadi kesalahan, kirim respons JSON dengan status 500
      return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    } finally {
      // Disconnect PrismaClient setelah selesai
      await prisma.$disconnect();
    }
  }
// Definisi fungsi PUT
export async function PUT(req, context) {
    try {
      // Ambil data yang diterima dari request body
      const { NamaProduk, Deskripsi, Harga, Stok, Kategori } = await req.json();
  
      // Ambil ID dari context params
      const ProdukID = Number(context.params.id) || 0;
  
      // Periksa apakah produk dengan ID yang diberikan ada
      const existingProduct = await prisma.produk.findUnique({
        where: {
          ProdukID: ProdukID,
        },
      });
  
      // Jika produk tidak ditemukan, kirim respons JSON dengan status 404
      if (!existingProduct) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
      }
  
      // Update produk berdasarkan ID
      const updatedProduct = await prisma.produk.update({
        where: {
          ProdukID: ProdukID,
        },
        data: {
          NamaProduk: NamaProduk,
          Deskripsi: Deskripsi,
          Harga: Harga,
          Stok: Stok,
          Kategori: Kategori,
        },
      });
  
      // Jika berhasil, kirim respons JSON dengan data produk yang telah diperbarui
      return NextResponse.json({ success: true, message: "Product updated successfully", data: updatedProduct }, { status: 200 });
    } catch (error) {
      console.error("Error updating product:", error);
  
      // Jika terjadi kesalahan, kirim respons JSON dengan status 500
      return NextResponse.json({ success: false, message: "Internal Server Error", error: error.message }, { status: 500 });
    } finally {
      // Disconnect PrismaClient setelah selesai
      await prisma.$disconnect();
    }
  }
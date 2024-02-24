// pages/api/users/index.js
import { PrismaClient } from "../../../../prisma/generated/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10; // Ganti dengan jumlah garam sesuai kebutuhan

//Menampilkan
export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(
      {
        success: true,
        message: "List of users",
        data: users,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching users:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Menambahkan pengguna baru
export async function POST(request) {
  try {
    const body = await request.json();
    const { Nama, Email, Password, Role, Alamat, JenisKelamin, Username } =
      body;

    if (
      !Nama ||
      !Email ||
      !Password ||
      !Role ||
      !Alamat ||
      !JenisKelamin ||
      !Username
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // Cek apakah pengguna dengan email yang sama sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { Email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already registered",
        },
        {
          status: 400,
        }
      );
    }

    // Hash kata sandi sebelum menyimpannya
    const hashedPassword = await bcrypt.hash(Password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        Nama,
        Email,
        PasswordHash: hashedPassword,
        Role,
        Alamat,
        JenisKelamin,
        // ...Tambahkan data lain sesuai kebutuhan
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User added successfully",
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error adding user:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}

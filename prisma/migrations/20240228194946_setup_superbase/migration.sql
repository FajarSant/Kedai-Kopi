-- CreateEnum
CREATE TYPE "KategoriEnum" AS ENUM ('MAKANAN', 'MINUMAN', 'KOFEE', 'ICE_DRINK', 'SNACK', 'PAKET');

-- CreateTable
CREATE TABLE "User" (
    "UserID" SERIAL NOT NULL,
    "Nama" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "PasswordHash" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "Alamat" TEXT,
    "JenisKelamin" TEXT,
    "Username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "Produk" (
    "ProdukID" SERIAL NOT NULL,
    "NamaProduk" TEXT NOT NULL,
    "Deskripsi" TEXT NOT NULL,
    "Harga" DOUBLE PRECISION NOT NULL,
    "Stok" INTEGER NOT NULL,
    "Kategori" "KategoriEnum" NOT NULL,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("ProdukID")
);

-- CreateTable
CREATE TABLE "Pembelian" (
    "PembelianID" SERIAL NOT NULL,
    "TanggalPembelian" TIMESTAMP(3) NOT NULL,
    "UserID" INTEGER NOT NULL,
    "TotalHarga" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pembelian_pkey" PRIMARY KEY ("PembelianID")
);

-- CreateTable
CREATE TABLE "DetailPembelian" (
    "DetailID" SERIAL NOT NULL,
    "PembelianID" INTEGER NOT NULL,
    "ProdukID" INTEGER NOT NULL,
    "Jumlah" INTEGER NOT NULL,
    "Subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DetailPembelian_pkey" PRIMARY KEY ("DetailID")
);

-- CreateTable
CREATE TABLE "Reservasi" (
    "ReservasiID" SERIAL NOT NULL,
    "TanggalReservasi" TIMESTAMP(3) NOT NULL,
    "UserID" INTEGER NOT NULL,
    "JumlahOrang" INTEGER NOT NULL,
    "Status" TEXT NOT NULL,

    CONSTRAINT "Reservasi_pkey" PRIMARY KEY ("ReservasiID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");

-- AddForeignKey
ALTER TABLE "Pembelian" ADD CONSTRAINT "Pembelian_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPembelian" ADD CONSTRAINT "DetailPembelian_ProdukID_fkey" FOREIGN KEY ("ProdukID") REFERENCES "Produk"("ProdukID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPembelian" ADD CONSTRAINT "DetailPembelian_PembelianID_fkey" FOREIGN KEY ("PembelianID") REFERENCES "Pembelian"("PembelianID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservasi" ADD CONSTRAINT "Reservasi_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

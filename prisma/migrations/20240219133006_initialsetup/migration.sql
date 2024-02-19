/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orderdetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `orderdetail` DROP FOREIGN KEY `OrderDetail_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `orderdetail` DROP FOREIGN KEY `OrderDetail_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `customer`;

-- DropTable
DROP TABLE `order`;

-- DropTable
DROP TABLE `orderdetail`;

-- DropTable
DROP TABLE `product`;

-- CreateTable
CREATE TABLE `User` (
    `UserID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nama` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `PasswordHash` VARCHAR(191) NOT NULL,
    `Role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_Email_key`(`Email`),
    PRIMARY KEY (`UserID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produk` (
    `ProdukID` INTEGER NOT NULL AUTO_INCREMENT,
    `NamaProduk` VARCHAR(191) NOT NULL,
    `Deskripsi` VARCHAR(191) NOT NULL,
    `Harga` DOUBLE NOT NULL,
    `Stok` INTEGER NOT NULL,
    `KategoriID` INTEGER NOT NULL,

    PRIMARY KEY (`ProdukID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kategori` (
    `KategoriID` INTEGER NOT NULL AUTO_INCREMENT,
    `NamaKategori` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`KategoriID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pembelian` (
    `PembelianID` INTEGER NOT NULL AUTO_INCREMENT,
    `TanggalPembelian` DATETIME(3) NOT NULL,
    `UserID` INTEGER NOT NULL,
    `TotalHarga` DOUBLE NOT NULL,

    PRIMARY KEY (`PembelianID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailPembelian` (
    `DetailID` INTEGER NOT NULL AUTO_INCREMENT,
    `PembelianID` INTEGER NOT NULL,
    `ProdukID` INTEGER NOT NULL,
    `Jumlah` INTEGER NOT NULL,
    `Subtotal` DOUBLE NOT NULL,

    PRIMARY KEY (`DetailID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservasi` (
    `ReservasiID` INTEGER NOT NULL AUTO_INCREMENT,
    `TanggalReservasi` DATETIME(3) NOT NULL,
    `UserID` INTEGER NOT NULL,
    `JumlahOrang` INTEGER NOT NULL,
    `Status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ReservasiID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produk` ADD CONSTRAINT `Produk_KategoriID_fkey` FOREIGN KEY (`KategoriID`) REFERENCES `Kategori`(`KategoriID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pembelian` ADD CONSTRAINT `Pembelian_UserID_fkey` FOREIGN KEY (`UserID`) REFERENCES `User`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailPembelian` ADD CONSTRAINT `DetailPembelian_ProdukID_fkey` FOREIGN KEY (`ProdukID`) REFERENCES `Produk`(`ProdukID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailPembelian` ADD CONSTRAINT `DetailPembelian_PembelianID_fkey` FOREIGN KEY (`PembelianID`) REFERENCES `Pembelian`(`PembelianID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservasi` ADD CONSTRAINT `Reservasi_UserID_fkey` FOREIGN KEY (`UserID`) REFERENCES `User`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;

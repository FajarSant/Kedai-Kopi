/*
  Warnings:

  - You are about to drop the column `KategoriID` on the `produk` table. All the data in the column will be lost.
  - You are about to drop the `kategori` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Kategori` to the `Produk` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `produk` DROP FOREIGN KEY `Produk_KategoriID_fkey`;

-- AlterTable
ALTER TABLE `produk` DROP COLUMN `KategoriID`,
    ADD COLUMN `Kategori` ENUM('MAKANAN', 'MINUMAN', 'KOFEE', 'ICE_DRINK', 'SNACK', 'PAKET') NOT NULL;

-- DropTable
DROP TABLE `kategori`;

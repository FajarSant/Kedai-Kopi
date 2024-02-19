/*
  Warnings:

  - You are about to alter the column `name` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `name` ENUM('MAKANAN', 'MINUMAN', 'KOFEE', 'ICE_DRINK', 'SNACK', 'PAKET') NOT NULL;

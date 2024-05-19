/*
  Warnings:

  - Added the required column `rating` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "menus" DROP CONSTRAINT "menus_restaurantId_fkey";

-- AlterTable
ALTER TABLE "restaurants" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;

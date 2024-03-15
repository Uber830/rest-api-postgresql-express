/*
  Warnings:

  - You are about to drop the column `permissionId_permission` on the `Role` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_permissionId_permission_fkey";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "permissionId_permission";

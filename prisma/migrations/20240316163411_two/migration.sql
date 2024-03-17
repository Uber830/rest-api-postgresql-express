/*
  Warnings:

  - You are about to drop the column `roleId_role` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `id_role_permission` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_roleId_role_fkey";

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "roleId_role",
ADD COLUMN     "id_role_permission" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_id_role_permission_fkey" FOREIGN KEY ("id_role_permission") REFERENCES "RolePermission"("id_role_permission") ON DELETE RESTRICT ON UPDATE CASCADE;

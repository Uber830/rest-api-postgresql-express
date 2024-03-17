/*
  Warnings:

  - The primary key for the `UsuarioRolePermission` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UsuarioRolePermission" DROP CONSTRAINT "UsuarioRolePermission_pkey",
ADD COLUMN     "id_user_role_permission" SERIAL NOT NULL,
ADD CONSTRAINT "UsuarioRolePermission_pkey" PRIMARY KEY ("id_user_role_permission");

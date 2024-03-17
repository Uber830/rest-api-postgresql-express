/*
  Warnings:

  - You are about to drop the column `id_role_permission` on the `Usuarios` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_id_role_permission_fkey";

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "id_role_permission";

-- CreateTable
CREATE TABLE "UsuarioRolePermission" (
    "id_user" INTEGER NOT NULL,
    "id_role_permission" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsuarioRolePermission_pkey" PRIMARY KEY ("id_user")
);

-- AddForeignKey
ALTER TABLE "UsuarioRolePermission" ADD CONSTRAINT "UsuarioRolePermission_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Usuarios"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioRolePermission" ADD CONSTRAINT "UsuarioRolePermission_id_role_permission_fkey" FOREIGN KEY ("id_role_permission") REFERENCES "RolePermission"("id_role_permission") ON DELETE RESTRICT ON UPDATE CASCADE;

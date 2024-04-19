/*
  Warnings:

  - A unique constraint covering the columns `[id_url]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Usuarios" ADD COLUMN     "id_url" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_id_url_key" ON "Usuarios"("id_url");

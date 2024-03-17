-- DropForeignKey
ALTER TABLE "Comentarios" DROP CONSTRAINT "Comentarios_id_post_fkey";

-- DropForeignKey
ALTER TABLE "Comentarios" DROP CONSTRAINT "Comentarios_id_user_fkey";

-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_id_post_fkey";

-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_id_user_fkey";

-- DropForeignKey
ALTER TABLE "Publicaciones" DROP CONSTRAINT "Publicaciones_id_user_fkey";

-- DropForeignKey
ALTER TABLE "RolePermission" DROP CONSTRAINT "RolePermission_id_permission_fkey";

-- DropForeignKey
ALTER TABLE "RolePermission" DROP CONSTRAINT "RolePermission_id_role_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioRolePermission" DROP CONSTRAINT "UsuarioRolePermission_id_role_permission_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioRolePermission" DROP CONSTRAINT "UsuarioRolePermission_id_user_fkey";

-- DropForeignKey
ALTER TABLE "login" DROP CONSTRAINT "login_id_user_fkey";

-- AddForeignKey
ALTER TABLE "UsuarioRolePermission" ADD CONSTRAINT "UsuarioRolePermission_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Usuarios"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioRolePermission" ADD CONSTRAINT "UsuarioRolePermission_id_role_permission_fkey" FOREIGN KEY ("id_role_permission") REFERENCES "RolePermission"("id_role_permission") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publicaciones" ADD CONSTRAINT "Publicaciones_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Usuarios"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Usuarios"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Publicaciones"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Usuarios"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Publicaciones"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "Role"("id_role") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_id_permission_fkey" FOREIGN KEY ("id_permission") REFERENCES "Permission"("id_permission") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login" ADD CONSTRAINT "login_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Usuarios"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

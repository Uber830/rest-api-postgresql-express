import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRolePermissionService = async () => {
  return await prisma.rolePermission.findMany();
};

const createRolePermissionService = async (rolePermission) => {
  return await prisma.rolePermission.create({
    data: rolePermission,
  });
};

const getRolePermissionByIdService = async (id) => {
  return await prisma.rolePermission.findUnique({
    where: {
      id_role_permission: parseInt(id),
    },
  });
};

const updateRolePermissionService = async (id, rolePermission) => {
  return await prisma.rolePermission.update({
    where: {
      id_role_permission: parseInt(id),
    },
    data: rolePermission,
  });
};

const deleteRolePermissionService = async (id) => {
  return await prisma.rolePermission.delete({
    where: {
      id_role_permission: parseInt(id),
    },
  });
};

export {
  getRolePermissionService,
  createRolePermissionService,
  getRolePermissionByIdService,
  updateRolePermissionService,
  deleteRolePermissionService,
};

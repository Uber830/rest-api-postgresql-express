import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPermissionService = async () => {
  const permission = await prisma.permission.findMany();
  return permission;
};

const createPermissionService = async (name) => {
  const permission = await prisma.permission.create({
    data: {
      permission: name,
    },
  });
  return permission;
};

const getPermissionByIdService = async (id) => {
  const permission = await prisma.permission.findUnique({
    where: {
      id_permission: parseInt(id),
    },
  });
  return permission;
};

const updatePermissionService = async (id, name) => {
  const permission = await prisma.permission.update({
    where: {
      id_permission: parseInt(id),
    },
    data: { permission: name },
  });
  return permission;
};

const deletePermissionService = async (id) => {
  const permission = await prisma.permission.delete({
    where: {
      id_permission: parseInt(id),
    },
  });
  return permission;
};

export {
  getPermissionService,
  getPermissionByIdService,
  createPermissionService,
  updatePermissionService,
  deletePermissionService,
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRoleService = async () => {
  const role = await prisma.role.findMany();
  return role;
};

const createRoleService = async (role, permission) => {
  const roles = await prisma.role.create({
    data: { role: role, permissionId_permission: permission },
  });
  return roles;
};

const getRoleByIdService = async (id) => {
  const role = await prisma.role.findUnique({
    where: { id_role: parseInt(id) },
  });
  return role;
};

const updateRoleService = async (id, role, permission) => {
  const roleUpdate = await prisma.role.update({
    where: { id_role: parseInt(id) },
    data: { role: role, permissionId_permission: permission },
  });
  return roleUpdate;
};

const deleteRoleService = async (id) => {
  const role = await prisma.role.delete({
    where: { id_role: parseInt(id) },
  });
  return role;
};

export {
  getRoleService,
  createRoleService,
  getRoleByIdService,
  updateRoleService,
  deleteRoleService,
};

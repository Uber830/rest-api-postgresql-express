import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRolePermissionService = async () => {
  return await prisma.rolePermission.findMany({
    select: {
      id_role_permission: true,
      role: {
        select: {
          id_role: true,
          role: true,
        },
      },
      permission: {
        select: {
          id_permission: true,
          permission: true,
        },
      },
    },
  });
};

const createRolePermissionService = async (id_role, id_permission) => {
  for (const permissionId of id_permission) {
    await prisma.rolePermission.create({
      data: {
        id_role: parseInt(id_role),
        id_permission: parseInt(permissionId),
      },
    });
  }
};

const getRolePermissionByIdService = async (id) => {
  return await prisma.rolePermission.findUnique({
    where: {
      id_role_permission: parseInt(id),
    },
    select: {
      id_role_permission: true,
      role: {
        select: {
          id_role: true,
          role: true,
        },
      },
      permission: {
        select: {
          id_permission: true,
          permission: true,
        },
      },
    },
  });
};

const getRolePermissionByRoleIdService = async (id) => {
  return await prisma.rolePermission.findMany({
    where: {
      id_role: parseInt(id),
    },
    select: {
      id_role_permission: true,
      role: {
        select: {
          id_role: true,
          role: true,
        },
      },
      permission: {
        select: {
          id_permission: true,
          permission: true,
        },
      },
    },
  });
};

const updateRolePermissionService = async (id, id_role, id_permission) => {
  return await prisma.rolePermission.update({
    where: {
      id_role_permission: parseInt(id),
    },
    data: {
      id_role: parseInt(id_role),
      id_permission: parseInt(id_permission),
    },
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
  getRolePermissionByRoleIdService,
  updateRolePermissionService,
  deleteRolePermissionService,
};

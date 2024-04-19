import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserService = async () => {
  return await prisma.usuarios.findMany({
    select: {
      id_user: true,
      username: true,
      avatar_url: true,
      email: true,
      created_at: true,
      updated_at: true,
    },
  });
};

const getUserByIdService = async (id) => {
  return await prisma.usuarios.findUnique({
    where: {
      id_user: parseInt(id),
    },
    select: {
      id_user: true,
      username: true,
      avatar_url: true,
      email: true,
      created_at: true,
      updated_at: true,
    },
  });
};

const getUserByIdAllInfoService = async (id) => {
  return await prisma.usuarios.findMany({
    where: {
      id_user: parseInt(id),
    },
    select: {
      id_user: true,
      username: true,
      avatar_url: true,
      email: true,
      created_at: true,
      updated_at: true,
      UsuarioRolePermission: {
        select: {
          id_user_role_permission: true,
          id_role_permission: true,
          role_permission: {
            select: {
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
          },
        },
      },
    },
  });
};

const createUserService = async ( username, avatar_url, email, password, role_permission ) => {
  // Create a new user and return the user without the password
  return await prisma.usuarios.create({
    data: {
      username: username,
      avatar_url: avatar_url,
      email: email,
      password: password,
      UsuarioRolePermission: {
        create: role_permission.map((id) => ({
          id_role_permission: id,
        })),
      },
    },
    select: {
      id_user: true,
      username: true,
      avatar_url: true,
      email: true,
      password: false,
      created_at: true,
      updated_at: true,
    },
  });
};

const deleteUserService = async (id) => {
  await prisma.usuarios.delete({
    where: {
      id_user: parseInt(id),
    },
  });
};

const updateUserService = async (id, username, avatar_url, email, password) => {
  // User to update
  const currentUser = await prisma.usuarios.findUnique({
    where: {
      id_user: parseInt(id),
    },
  });

  await prisma.usuarios.update({
    where: {
      id_user: parseInt(id),
    },
    data: {
      username: username !== undefined ? username : currentUser.username,
      avatar_url: avatar_url !== undefined ? avatar_url : currentUser.avatar_url,
      email: email !== undefined ? email : currentUser.email,
      password: password !== undefined ? password : currentUser.password,
    },
  });
};

const addUserRoleService = async (id_user, id_role_permission) => {
  return await prisma.usuarioRolePermission.create({
    data: {
      id_user: parseInt(id_user),
      id_role_permission: parseInt(id_role_permission),
    }
  });
};

const deleteUserRoleService = async (id_user_role_permission) => {
  return await prisma.usuarioRolePermission.delete({
    where: {
      id_user_role_permission: parseInt(id_user_role_permission),
    }
  });
};

export {
  getUserService,
  getUserByIdService,
  getUserByIdAllInfoService,
  createUserService,
  deleteUserService,
  updateUserService,
  addUserRoleService,
  deleteUserRoleService,
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Logins the user
 * @description This function logs the user out of the application
 */

const loginHandlerService = async (email) => {
  return await prisma.usuarios.findMany({
    where: {
      email: email,
    },
    select: {
      id_user: true,
      username: true,
      password: true,
    },
  });
};

const saveLoginHandler = async (id_user) => {
  return await prisma.login.create({
    data: {
      id_user: id_user,
    },
  });
};


/**
 * Register the user in application
 * @returns Response object containing message and code status
 */

const existEmail = async (email) => {
  const user = await prisma.usuarios.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(400).json({ error: "Email already not exist in DB" });
  }

  return user;
};

const registerUser = async (username, public_id, avatar_url, email, password) => {
  const userPermission = [3, 4, 9]      //* 3- user(reading), 4- user(writing), 9- user(editing) 

  return await prisma.usuarios.create({
    data: {
      username: username,
      id_url: public_id,
      avatar_url: avatar_url,
      email: email,
      password: password,
      UsuarioRolePermission: {
        create: userPermission.map((id) => ({
          id_role_permission: id,
        })),
      }
    },
  });
};

export { loginHandlerService, saveLoginHandler, existEmail, registerUser };

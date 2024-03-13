import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const getUserService = async () => {
  return await prisma.user.findMany();
};

const getUserByIdService = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
};

const createUserService = async (data) => {
  return await prisma.user.create({
    data: {
      ...data,
    },
  });
};

const deleteUserService = async (id) => {
  return await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });
};

const updateUserService = async (id, data) => {
  return await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      ...data,
    },
  });
};

export { getUserService, getUserByIdService, createUserService, deleteUserService, updateUserService };
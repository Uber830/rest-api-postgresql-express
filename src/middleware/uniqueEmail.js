import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * If the email already exists in the database, it will return a 400 status code with a message.
 * @returns Object with the error message or calls the next middleware.
 */

const findUniqueEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await prisma.usuarios.findUnique({
    where: {
      email: email,
    },
  });

  if (userEmail) {
    return res.status(400).json({ error: "Email already exists!" });
  }

  next();
};

export { findUniqueEmail };
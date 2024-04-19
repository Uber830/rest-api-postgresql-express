import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Validate if the email/username is unique in the database
const emailUsernameUnique = async (req, res, next) => {
  const { email, username } = req.body;
  // email and username unique of a user
  const userEmail = await prisma.usuarios.findUnique({
    where: {
      email: email,
      username: username,
    },
  });

  if (userEmail) {
    return res.status(200).json({ message: "Email already exists!" });
  }
  next();
};

const emailNotExists = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await prisma.usuarios.findUnique({
    where: {
      email: email,
    },
  });
  if (!userEmail) {
    return res.status(200).json({ message: "Email already not exist in DB" });
  }
  next();
};

export { emailUsernameUnique, emailNotExists };

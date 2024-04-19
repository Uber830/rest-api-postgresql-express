import { compare, hash } from "bcrypt";

// This is generated hash with the code of the user provided
const hashPassword = async (password) => {
  const hashCreated = await hash(password, 10);
  return { hashCreated };
};

// This validates the password against the password hash provided and returns boolean
const comparePassword = async (password, hash) => {
  const hashValid = await compare(password, hash);
  return { hashValid };
};

export { comparePassword, hashPassword };

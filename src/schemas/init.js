import { z } from "zod";

const zStringRequired = (message) => z.string().trim().min(5, { message: message ?? "Minimum 5 characters" })
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Schema for validate upload image of the user
const imageSchema = z.object({
  profileImage: z.object({
    name: z.string(),
    data: z.instanceof(Buffer),
    size: z.number(),
    encoding: z.string(),
    tempFilePath: z.string(),
    truncated: z.boolean(),
    mimetype: z.string(),
    md5: z.string(),
    mv: z.function()
  })
  .refine((file) => file.size > 0, { message: "Image is required."})
  .refine((file) => file.size <= MAX_FILE_SIZE, { message: "Max file size is 5MB."})
  .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.mimetype), { message: ".jpg, .jpeg, .png and .webp files are accepted." })
});

// Schema for register user
const RegisterSchema = z.object({
  username: zStringRequired().max(20, { message: "Username is too long" }),
  password: zStringRequired().max(16, { message: "Password is too long" }),
  email: zStringRequired().email({ message: "Write a valid email address" }),
});

// Schema for login user
const LoginSchema = z.object({
  email: zStringRequired().email({ message: "Write a valid email address" }),
  password: zStringRequired().max(16, { message: "Password is too long" }),
});

export { RegisterSchema, LoginSchema, imageSchema };

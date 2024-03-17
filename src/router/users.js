import { Router } from "express";

// Module local
import { getUsers, createUsers, getUserById, getUserByIdAllInfo, deleteUser, updateUser } from "../controller/user.js";
import { findUniqueEmail } from "../middleware/uniqueEmail.js";
import { rolePermissionIsExist } from "../middleware/isArrayValueExist.js";

const routerUser = Router();

routerUser.get("/users", getUsers);

routerUser.post("/users", findUniqueEmail, rolePermissionIsExist, createUsers);

routerUser.get("/users/:id", getUserById);

routerUser.get("/users/:id/allinfo", getUserByIdAllInfo);

routerUser.put("/users/:id", updateUser);

routerUser.delete("/users/:id", deleteUser);

export { routerUser }
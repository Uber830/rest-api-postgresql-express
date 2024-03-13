import { Router } from "express";

// Module local
import { getUsers, createUsers, getUserById, deleteUser, updateUser } from "../controller/user.js";

const routerUser = Router();

routerUser.get("/users", getUsers);

routerUser.post("/users", createUsers);

routerUser.get("/users/:id", getUserById);

routerUser.put("/users/:id", updateUser);

routerUser.delete("/users/:id", deleteUser);

export { routerUser }
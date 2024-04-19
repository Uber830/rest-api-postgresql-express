import { Router } from "express";

// Module local
import { getUsers, createUsers, getUserById, getUserByIdAllInfo, deleteUser, updateUser, pushUserRole, deleteUserRole } from "../controller/user.js";
import { findUniqueEmail } from "../middleware/uniqueEmail.js";
import { rolePermissionIsExist } from "../middleware/isArrayValueExist.js";
import { existAuth } from "../middleware/isAuth.js";
import { controlRolePermission } from "../middleware/controlRolePermission.js";

const routerUser = Router();

routerUser.get("/users", existAuth, controlRolePermission([4,5,6,7]), getUsers);

routerUser.post("/users", existAuth, controlRolePermission([4,5,6,7]), findUniqueEmail, rolePermissionIsExist, createUsers);

routerUser.get("/users/:id", existAuth, controlRolePermission([4,5,6]), getUserById);

routerUser.get("/users/:id/allinfo", existAuth, controlRolePermission([4,5]), getUserByIdAllInfo);

routerUser.put("/users/:id", existAuth, controlRolePermission([4,5,6]), updateUser);

routerUser.delete("/users/:id", existAuth, controlRolePermission([4,5,6,7]), deleteUser);

//? Manage role of one user
routerUser.post("/users/:id/permission", existAuth, controlRolePermission([4,5,6,7]), pushUserRole);

routerUser.delete("/users/:id/permission", existAuth, controlRolePermission([4,5,6,7]), deleteUserRole);

export { routerUser }
import { Router } from "express";

import { getPermission, getPermissionById, createPermission, updatePermission, deletePermission } from "../controller/permission.js";

const routerPermission = Router();

routerPermission.get("/permission", getPermission);

routerPermission.post("/permission", createPermission);

routerPermission.get("/permission/:id", getPermissionById);

routerPermission.put("/permission/:id", updatePermission);

routerPermission.delete("/permission/:id", deletePermission);

export { routerPermission };
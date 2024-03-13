import { Router } from "express";
import { getRolePermission, getRolePermissionById, createRolePermission, updateRolePermission, deleteRolePermission } from "../controller/rolePermission.js";

const routerRolePermission = Router();

routerRolePermission.get("/rolePermission", getRolePermission);

routerRolePermission.post("/rolePermission", createRolePermission);

routerRolePermission.get("/rolePermission/:id", getRolePermissionById);

routerRolePermission.put("/rolePermission/:id", updateRolePermission);

routerRolePermission.delete("/rolePermission/:id", deleteRolePermission);

export { routerRolePermission };
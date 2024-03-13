import { Router } from "express";

// Module local
import { getRoles, createRoles, getRoleById, updateRole, deleteRole } from "../controller/role.js";

const routerRole = Router();

routerRole.get("/roles", getRoles);

routerRole.post("/roles", createRoles);

routerRole.get("/roles/:id", getRoleById);

routerRole.put("/roles/:id", updateRole);

routerRole.delete("/roles/:id", deleteRole);

export { routerRole }
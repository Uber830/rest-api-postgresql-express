import {
  getRolePermissionService,
  getRolePermissionByIdService,
  getRolePermissionByRoleIdService,
  createRolePermissionService,
  updateRolePermissionService,
  deleteRolePermissionService,
} from "../service/rolePermission.js";
import { getRoleByIdService } from "../service/role.js";
import { getPermissionByIdService } from "../service/permission.js";

const getRolePermission = async (req, res) => {
  try {
    const rolePermission = await getRolePermissionService();
    if (rolePermission.length === 0) {
      return res
        .status(200)
        .json({ message: "No se encontraron roles-permisos" });
    }

    res.status(200).json(rolePermission);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor al obtener los roles-permisos" });
  }
};

const createRolePermission = async (req, res) => {
  const { id_role, id_permission } = req.body;
  try {
    // Verifica si el rol con el ID proporcionado existe
    const roleExist = await getRoleByIdService(id_role);
    if (!roleExist) {
      return res
        .status(400)
        .json({ message: "El rol con el ID proporcionado no existe" });
    }

    // Verifica si el permiso con el ID proporcionado existe
    for (const permissionId of id_permission) {
      const permissionExist = await getPermissionByIdService(permissionId);
      if (!permissionExist) {
        return res
          .status(400)
          .json({ message: `El permiso con el ID ${permissionId} no existe!` });
      }
    }

    await createRolePermissionService(id_role, id_permission);
    res.status(201).json({ result: "Rol-Permiso creado correctamente!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getRolePermissionById = async (req, res) => {
  const { id } = req.params;
  try {
    const rolePermission = await getRolePermissionByIdService(id);
    if (!rolePermission) {
      return res.status(200).json({
        message: "No se encontró el rol-permiso con el ID proporcionado",
      });
    }

    res.status(200).json(rolePermission);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor al obtener el rol-permiso" });
  }
};

const getRolePermissionByRoleId = async (req, res) => {
  const { id } = req.params; // ID of role
  try {
    const roleExist = await getRoleByIdService(id);
    if (!roleExist) {
      return res
        .status(400)
        .json({ message: "El rol con el ID proporcionado no existe" });
    }

    const rolePermission = await getRolePermissionByRoleIdService(id);
    if (rolePermission.length === 0) {
      return res
        .status(200)
        .json({ message: "No se encontraron roles-permisos para el rol" });
    }

    res.status(200).json(rolePermission);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor al obtener los roles-permisos" });
  }
};

const updateRolePermission = async (req, res) => {
  const { id } = req.params;
  const { id_role, id_permission } = req.body;
  try {
    // Verifica si el rol con el ID proporcionado existe
    const roleExist = await getRoleByIdService(id_role);
    if (!roleExist) {
      return res
        .status(400)
        .json({ message: "El rol con el ID proporcionado no existe" });
    }

    // Verifica si el permiso con el ID proporcionado existe
    const permissionExist = await getPermissionByIdService(id_permission);
    if (!permissionExist) {
      return res
        .status(400)
        .json({ message: "El permiso con el ID proporcionado no existe" });
    }

    await updateRolePermissionService(id, id_role, id_permission);
    res.status(200).json({ result: "Rol-Permiso actualizado correctamente!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRolePermission = async (req, res) => {
  const { id } = req.params;
  try {
    const rolePermissionExist = await getRolePermissionByIdService(id);
    if (!rolePermissionExist) {
      return res
        .status(400)
        .json({ message: "El rol-permiso con el ID proporcionado no existe" });
    }

    await deleteRolePermissionService(id);
    res.status(200).json({ result: "Rol-Permiso eliminado correctamente!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor al eliminar el rol-permiso" });
  }
};

export {
  getRolePermission,
  getRolePermissionById,
  getRolePermissionByRoleId,
  createRolePermission,
  updateRolePermission,
  deleteRolePermission,
};

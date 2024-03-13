import {
  getRoleService,
  createRoleService,
  getRoleByIdService,
  updateRoleService,
  deleteRoleService,
} from "../service/role.js";
import { getPermissionByIdService } from "../service/permission.js";

const getRoles = async (req, res) => {
  try {
    const roles = await getRoleService();

    if (roles.length === 0) {
      return res.status(200).json({ message: "No se encontraron roles" });
    }

    res.status(200).json(roles);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor al obtener los roles" });
  }
};

const createRoles = async (req, res) => {
  try {
    const { role, permissionId_permission: permission } = req.body;

    // Verifica si el permiso con el ID proporcionado existe
    const permissionExist = await getPermissionByIdService(permission);
    if (!permissionExist) {
      return res
        .status(400)
        .json({ message: "El permiso con el ID proporcionado no existe" });
    }

    await createRoleService(role, permission);

    res.status(201).json({ result: "Rol creado correctamente!" });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor al crear el rol" });
  }
};

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await getRoleByIdService(id);

    if (!role) {
      return res
        .status(200)
        .json({ message: "No se encontró el rol con el ID proporcionado" });
    }

    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor al obtener el rol" });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, permissionId_permission: permission } = req.body;

    // Verifica si el rol con el ID proporcionado existe
    const roleExist = await getRoleByIdService(id);
    if (!roleExist) {
      return res
        .status(400)
        .json({ message: "El rol con el ID proporcionado no existe" });
    }

    // Verifica si el permiso con el ID proporcionado existe
    const permissionExist = await getPermissionByIdService(permission);
    if (!permissionExist) {
      return res
        .status(400)
        .json({ message: "El permiso con el ID proporcionado no existe" });
    }

    await updateRoleService(id, role, permission);

    res.status(200).json({ result: "Rol actualizado correctamente!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor al actualizar el rol" });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica si el rol con el ID proporcionado existe
    const roleExist = await getRoleByIdService(id);
    if (!roleExist) {
      return res
        .status(400)
        .json({ message: "El rol con el ID proporcionado no existe" });
    }

    await deleteRoleService(id);

    res.status(200).json({ result: "Rol eliminado correctamente!" });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor al eliminar el rol" });
  }
};

export { getRoles, createRoles, getRoleById, updateRole, deleteRole };

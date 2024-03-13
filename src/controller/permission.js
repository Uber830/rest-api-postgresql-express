import {
  getPermissionService,
  getPermissionByIdService,
  createPermissionService,
  updatePermissionService,
  deletePermissionService,
} from "../service/permission.js";


const getPermission = async (req, res) => {
  try {
    const permission = await getPermissionService();

    if (!permission) {
      return res.status(200).json({ message: "No se encontraron permisos" });
    }

    return res.status(200).json(permission);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error en el servidor al obtener los permisos" });
  }
};

const getPermissionById = async (req, res) => {
  try {
    const { id } = req.params;
    const permission = await getPermissionByIdService(id);

    // Por si no se encuentra el permiso con el ID proporcionado
    if (!permission) {
      return res
        .status(200)
        .json({ message: "No se encontró el permiso con el ID proporcionado" });
    }

    return res.status(200).json(permission);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error en el servidor al obtener el permiso" });
  }
};

const createPermission = async (req, res) => {
  try {
    const { permission } = req.body;
    await createPermissionService(permission);

    // if (!permissionNew) {
    //   return res
    //     .status(400)
    //     .json({ message: "Error en la solicitud al crear el permiso" });
    // }

    return res.status(201).json({ result: "Permiso creado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error en el servidor al crear el permiso" });
  }
};

const updatePermission = async (req, res) => {
  try {
    const { id } = req.params;
    const { permission: name } = req.body;

    // Verifica si el permiso con el ID proporcionado existe
    const permissionExist = await getPermissionByIdService(id);
    if (!permissionExist) {
      return res
        .status(400)
        .json({ message: "El permiso con el ID proporcionado no existe" });
    }

    await updatePermissionService(id, name);

    return res
      .status(200)
      .json({ result: "Permiso actualizado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error en el servidor al actualizar el permiso" });
  }
};

const deletePermission = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica si el permiso con el ID proporcionado existe
    const permissionExist = await getPermissionByIdService(id);
    if (!permissionExist) {
      return res
        .status(400)
        .json({ message: "El permiso con el ID proporcionado no existe" });
    }

    await deletePermissionService(id);

    return res.status(200).json({ result: "Permiso eliminado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error en el servidor al eliminar el permiso" });
  }
};

export {
  getPermission,
  getPermissionById,
  createPermission,
  updatePermission,
  deletePermission,
};

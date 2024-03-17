import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Check if the role_permission_array exist in the database
 * @returns {Promise<number>} Number of role_permission_array exist in the database or message error
 */

const rolePermissionIsExist = async (req, res, next) => {
  const { role_permission_array } = req.body;

  // Number of role_permission_array exist in the database
  const userNumber = await prisma.rolePermission.count({
    where: {
      id_role_permission: {
        in: role_permission_array,
      },
    },
  });
  console.log(userNumber);

  if (userNumber !== role_permission_array.length) {
    return res.status(400).json({
      error:
        "Insert a number of role_permission_array that exist in the database",
    });
  }

  next();
};

export { rolePermissionIsExist };

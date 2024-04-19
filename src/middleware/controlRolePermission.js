import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * This middleware is used to check if the user has the required permissions to access this route.
 * @param {Array} requiredPermissions  Required permissions to access this route.
 * @returns {Function}  Middleware function.
 */

const controlRolePermission =
  (requiredPermissions) => async (req, res, next) => {
    const { id_user, username } = req.payload;

    // ? Access to permissions of the user.
    const userRelation = await prisma.usuarios.findMany({
      where: {
        id_user: parseInt(id_user),
        username: username,
      },
      select: {
        UsuarioRolePermission: {
          select: {
            role_permission: {
              select: {
                role: {
                  select: {
                    role: true,
                  },
                },
                permission: {
                  select: {
                    id_permission: true,
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    try {
      const userPermissions = userRelation[0]?.UsuarioRolePermission;
      const permission = new Array(); // Array to store the permissions of the user.
      userPermissions.forEach(({ role_permission }) => {
        const {
          permission: { id_permission },
        } = role_permission;
        permission.push(id_permission);
      });

      //? Check if the user has the required permissions.
      let arrayValue = requiredPermissions.filter( (value) => !permission.includes(value) );
      if(arrayValue.length !== 0) {
        return res.status(400).json({ error: " You don't have the required permissions" });
      }

      next();
    } catch (err) {
      res
        .status(400)
        .json({ error: "Error in validation of the user permissions" });
    }
  };

export { controlRolePermission };

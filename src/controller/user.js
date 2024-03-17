import {
  getUserService,
  getUserByIdService,
  getUserByIdAllInfoService,
  createUserService,
  deleteUserService,
  updateUserService,
} from "../service/users.js";

const getUsers = async (req, res) => {
  try {
    const users = await getUserService();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error in the server to get all users" });
  }
};

const createUsers = async (req, res) => {
  try {
    const { username, avatar_url, email, password, role_permission_array } = req.body;
    await createUserService( username, avatar_url, email, password, role_permission_array );

    res.status(201).json({ result: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error in the server to create the user" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(id);

    if (!user) {
      return res
        .status(400)
        .json({ message: "This id does not exist in the DB" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error in the server to get the user" });
  }
};

const getUserByIdAllInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const userAllInfo = await getUserByIdAllInfoService(id);

    if (userAllInfo.length === 0) {
      return res
        .status(400)
        .json({ message: "This id does not exist in the DB" });
    }

    res.status(200).json(userAllInfo);
  } catch (error) {
    res.status(500).json({ error: "Error in the server to get all the user info" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, avatar_url, email, password } = req.body;
    // Update partial user
    await updateUserService(id, username, avatar_url, email, password);

    res.status(200).json({ result: "User updated successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error in the server to update the user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUserService(id);

    res.status(200).json({ result: "User deleted successfully!" });
  } catch (error) {
    if (error?.meta?.cause) {
      return res
        .status(400)
        .json({ message: "This id does not exist in the DB" });
    }

    res.status(500).json({ error: "Error in the server to delete the user" });
  }
};

export { getUsers, createUsers, getUserById, getUserByIdAllInfo, deleteUser, updateUser };

import {
  getUserService,
  getUserByIdService,
  createUserService,
  deleteUserService,
  updateUserService,
} from "../service/users.js";

const getUsers = async (req, res) => {
  try {
    const users = await getUserService();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUsers = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await createUserService(user);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const userUpdated = await updateUserService(id, user);

    res.status(200).json(userUpdated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUserService(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getUsers, createUsers, getUserById, deleteUser, updateUser };

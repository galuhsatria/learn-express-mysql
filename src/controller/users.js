const usersModel = require('../models/users');

const getAllUsers = async (req, res, next) => {
  try {
    const [data] = await usersModel.getAllUsers();
    res.json({
      message: 'Get all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createUsers = async (req, res) => {
  const { body } = req;
  if(!body.name || !body.email || !body.address) {
    res.status(400).json({
      message: 'Masukan data dengan lengkap',
    });
  }
  try {
    await usersModel.createNewUsers(body);
    res.status(201).json({
      message: 'Create users success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await usersModel.updateUser(body, id);
    res.json({
      message: 'update success',
      data: { id: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await usersModel.deleteUser(id);
    res.json({
      message: 'delete user success',
      data: {
        id: id,
        data: null,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};
module.exports = { getAllUsers, createUsers, updateUser, deleteUser };

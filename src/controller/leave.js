const leaveModels = require('../models/leave')

const getAllLeave = async (req, res) => {
  try {
    const dataDB = await leaveModels.getAllLeave();

    res.json({
      message: "GET all data success",
      data: dataDB,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error.message, // Mengirim pesan error yang lebih deskriptif
    });
  }
}

const createNewLeave = async (req, res) => {
  try {
    await leaveModels.createNewLeave(req.body);

    res.json({
      message: "CREATE new user success",
      body: req.body
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error.message,
    });
  }
};

const updateLeave = async (req, res) => {
  const id = req.params.id;
  const { body } = req;

  try {
    await leaveModels.updateLeave(body, id);

    res.json({
      message: "UPDATE user success",
      body: {
        id: id,
        ...body
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error.message,
    });
  }
};

const deleteLeave = async (req, res) => {
  const id = req.params.id;

  try {
    await leaveModels.deleteLeave(id);
    res.json({
      message: `DELETE user ID ${id} success`,
      body: null
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error.message,
    });
  }
};

module.exports = {
    getAllLeave,
    createNewLeave,
    updateLeave,
    deleteLeave,
}
const Travel = require("../models/Travel.Model");

// METHOD: GET All travels books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    return res.status(200).json({
      message: "succes",
      travels,
    });
  } catch (err) {
    res.send(err);
  }
};

// METHOD: GET ById travel book
const getByIdTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "Not fond",
      });
    }
    return res.status(200).json({
      message: "succes",
      travel,
    });
  } catch (err) {
    res.send(err);
  }
};

// METHOD: POST New Add travel book
const addTravelBook = async (req, res) => {
  try {
    const {
      title,
      image,
      desc
    } = req.body;
    const newTravel = await Travel.create({
      title,
      image,
      desc
    });
    return res.status(201).json({
      message: "succes",
      newTravel,
    });
  } catch (err) {
    res.send(err);
  }
};

// METHOD: PUT Edit ById travel book
const updateTravelBook = async (req, res) => {
  try {
    const {
      title,
      image,
      desc
    } = req.body;
    const updateTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      desc
    });
    return res.status(200).json({
      message: "succes",
      updateTravel,
    });
  } catch (err) {
    res.send(err);
  }
};

// METHOD: DELETE remove ById travel book
const removeTravelBook = async (req, res) => {
  try {
    await Travel.findByIdAndRemove(req.params.id);
    return res.status(200).json({
      message: "DELETED "
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllTravels,
  getByIdTravel,
  addTravelBook,
  updateTravelBook,
  removeTravelBook
};
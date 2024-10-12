import Jemaah from '../models/JemaahModel.js';

const getJemaah = async (req, res) => {
  try {
    const jemaah = await Jemaah.findAll();
    res.status(200).json(jemaah);
  } catch (error) {
    console.log(error.message);
  }
};

const getJemaahByNIK = async (req, res) => {
  try {
    const jemaah = await Jemaah.findOne({
      where: {
        NIK: req.params.NIK,
      },
    });
    res.status(200).json(jemaah);
  } catch (error) {
    console.log(error);
  }
};

const createJemaah = async (req, res) => {
  try {
    await Jemaah.create(req.body);
    res.status(201).json({
      message: 'Jemaah added successfully',
    });
  } catch (error) {
    console.log(error.message);
  }
};

const updateJemaah = async (req, res) => {
  try {
    await Jemaah.update(req.body, {
      where: {
        NIK: req.params.NIK,
      },
    });
    res.status(200).json({
      message: 'Jemaah updated successfully',
    });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteJemaah = async (req, res) => {
  try {
    await Jemaah.destroy({
      where: {
        NIK: req.params.NIK,
      },
    });
    res.status(200).json({
      message: 'Jemaah deleted successfully',
    });
  } catch (error) {
    console.log(error.message);
  }
};

export { getJemaah, getJemaahByNIK, createJemaah, updateJemaah, deleteJemaah };

// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const voitures = await tables.voiture.readAll();
    res.json(voitures);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
};

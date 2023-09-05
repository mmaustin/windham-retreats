const Retreat = require("../models/Retreat");

const getRetreats = async(req, res) => {
  
  const retreats = await Retreat.find({});
  res.status(StatusCodes.OK).json({ retreats });
};

module.exports = getRetreats;
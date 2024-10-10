const CT = require('../models/CT');

const getData = async (req, resp) => {
  try {
    // Create a new query every time the function is called
    const Walldata = await CT.find({});
    resp.send(Walldata);
  } catch (error) {
    console.log(error);
    resp.status(500).send("An error occurred while fetching data.");
  }
};

module.exports = getData;

const CT = require('../models/CT');

const getData = async (req, resp) => {
  try {


    // pagination
    let fetchAll = req.query.all === 'true' ;
    let page = Number(req.query.page) || 1;
    let LimitPerPage = 3;
    let skipped = (page - 1) * LimitPerPage;


    let Walldata;
    if (fetchAll || page === 0 || page === null) {
      Walldata = await CT.find({});

    }else {
      Walldata = await CT.find({}).skip(skipped).limit(LimitPerPage);
    }

    resp.status(200).json({ Walldata, hits: Walldata.length, totalNumberOfPages: Walldata.length / LimitPerPage });
    // Create a new query every time the function is called

  } catch (error) {
    console.log(error);
    resp.status(500).send("An error occurred while fetching data.");
  }
};

module.exports = getData;



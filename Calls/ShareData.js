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


// const CT = require('../models/CT');

// const getData = async (req, resp) => {
//   try {
//     // Fetch all data if 'all' query is set to 'true'
//     let fetchAll = req.query.all === 'true' || true;
    
//     // Pagination settings
//     let page = Number(req.query.page) || 1; // Default to page 1 if not provided or invalid
//     let limitPerPage = 3; // Limit the number of records per page
//     let skipped = (page - 1) * limitPerPage;

//     let Walldata;
//     let totalDocs = await CT.countDocuments(); // Get total number of documents

//     if (fetchAll) {
//       // Fetch all documents
//       Walldata = await CT.find({});
//     } else {
//       // Fetch paginated data
//       Walldata = await CT.find({}).skip(skipped).limit(limitPerPage);
//     }

//     // Calculate total pages
//     let totalPages = Math.ceil(totalDocs / limitPerPage);

//     // Send response with paginated data, total records, and total pages
//     resp.status(200).json({
//       Walldata, 
//       hits: Walldata.length, 
//       totalNumberOfPages: totalPages, 
//       currentPage: page
//     });

//   } catch (error) {
//     console.log(error);
//     resp.status(500).send("An error occurred while fetching data.");
//   }
// };

// module.exports = getData;


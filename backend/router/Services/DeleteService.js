// const bodyParser = require("body-parser");
// const express = require("express");
// const router = express.Router();
// const jsonParser = bodyParser.json();
// const ServiceModel = require("../../model/service/ServiceSchema");

// router.delete("/deleteservice:serviceId",jsonParser, async (req, res) => {
//   try {
//     const {
//         serviceId
//     } = req.params;


//    const deletedData= await ServiceModel.deleteOne({_id:serviceId});

//     if (updatedData) {
//       return res.json({
//         success: true,
//         data: deletedData,
//         message: "service deleted",
//       });
//     } else {
//       return res.json({
//         success: false,

//         message: "service not deleted",
//       });
//     }
//   } catch (error) {
//     console.log("error in deleting services");
//     return res.json({ message: "error in delete ", success: false });
//   }
// });


// module.exports= router;


const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const jsonParser = bodyParser.json();
const ServiceModel = require("../../model/service/ServiceSchema");

router.delete("/deleteservice/:serviceId", jsonParser, async (req, res) => {
  try {
    const { serviceId } = req.params;
console.log(serviceId)
    const deletedData = await ServiceModel.deleteOne({ _id: serviceId });

    if (deletedData.deletedCount > 0) {
      return res.json({
        success: true,
        message: "Service deleted",
      });
    } else {
      return res.json({
        success: false,
        message: "Service not deleted or not found",
      });
    }
  } catch (error) {
    console.log("Error in deleting services:", error);
    return res.json({ message: "Error in deletion", success: false });
  }
});

module.exports = router;

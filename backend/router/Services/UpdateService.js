const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const jsonParser = bodyParser.json();
const ServiceModel = require("../../model/service/ServiceSchema");

router.put("/updateservice",jsonParser, async (req, res) => {
  try {
    const {
        serviceId,
      image,
      serviceName,
      serviceDescription,
      serviceDetail,
      pricePerMinute,
      rating,
    } = req.body;

    const filter= {_id:serviceId};
    const update={
      image,
      serviceName,
      serviceDescription,
      serviceDetail,
      pricePerMinute,
      rating,
    }


   const updatedData= await ServiceModel.findOneAndUpdate(filter,update,{new:true});

    if (updatedData) {
      return res.json({
        success: true,
        data: updatedData,
        message: "service updated",
      });
    } else {
      return res.json({
        success: false,

        message: "service not updated",
      });
    }
  } catch (error) {
    console.log("error in updating services");
    return res.json({ message: "error in upating ", success: false });
  }
});


module.exports= router;
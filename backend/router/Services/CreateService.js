const bodyParser = require("body-parser");
// const express = require("express");
// const router = express.Router();
const jsonParser = bodyParser.json();
// const multer = require('multer');
// const ServiceModel = require("../../model/service/ServiceSchema");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Change extension based on file type
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/createservice",jsonParser , upload.single('image'), async (req, res) => {
//   try {
//     const {
      
//       serviceName,
//       serviceDescription,
//       serviceDetail,
//       pricePerMinute,
//       rating,
//     } = req.body;
//     // const image = fs.readFileSync(req.file.path);
// console.log(image)
//     const data = await ServiceModel.create({
//     //  image: image,
//       serviceName: serviceName,
//      serviceDescription: serviceDescription,
//      serviceDetail: serviceDetail,
//      pricePerMinute: pricePerMinute,
//       rating :rating,
//     });
//     console.log("1234")

//     if (data) {
//       return res.json({
//         success: true,
//         data: data,
//         message: "service created",
//       });
//     } else {
//       return res.json({
//         success: false,

//         message: "service not created",
//       });
//     }
//   } catch (error) {
//     console.log("error in creating services");
//     return res.json({ message: "error in creating ", success: false });
//   }
// });


// module.exports= router;



// const express = require("express");
// const router = express.Router();
// const multer = require('multer');
// const ServiceModel = require("../../model/service/ServiceSchema");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Change extension based on file type
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/createservice", upload.single('image'), async (req, res) => {
//   try {
//     const {
//       serviceName,
//       serviceDescription,
//       serviceDetail,
//       pricePerMinute,
//       rating,
//     } = req.body;

    
//     const image = req.image ? req.images.path : "default-image-path.jpg"; // Adjust the default path accordingly
//        console.log(req.image)
//     const data = await ServiceModel.create({
//       image: image,
//       serviceName: serviceName,
//       serviceDescription: serviceDescription,
//       serviceDetail: serviceDetail,
//       pricePerMinute: pricePerMinute,
//       rating: rating,
//     });

//     if (data) {
//       return res.json({
//         success: true,
//         data: data,
//         message: "Service created",
//       });
//     } else {
//       return res.json({
//         success: false,
//         message: "Service not created",
//       });
//     }
//   } catch (error) {
//     console.log("Error in creating services", error);
//     return res.json({ message: "Error in creating", success: false });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const multer = require('multer');
const ServiceModel = require("../../model/service/ServiceSchema");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Change extension based on file type
  },
});

const upload = multer({ storage: storage });

router.post("/createservice", upload.single('image'), async (req, res) => {
  try {
    const {
      serviceName,
      serviceDescription,
      serviceDetail,
      pricePerMinute,
      rating,
    } = req.body;

    // Assuming image URL is sent in the request body
    const image = req.file ? req.file.path : "default-image-path.jpg"; // Adjust the default path accordingly

const decodedArray = serviceDetail[0].split(',').map(item => decodeURIComponent(item));
    const data = await ServiceModel.create({
      image: image,
      serviceName: serviceName,
      serviceDescription: serviceDescription,
      serviceDetail: decodedArray,
      pricePerMinute: pricePerMinute,
      rating: rating,
    });

    if (data) {
      return res.json({
        success: true,
        data: data,
        message: "Service created",
      });
    } else {
      return res.json({
        success: false,
        message: "Service not created",
      });
    }
  } catch (error) {
    console.log("Error in creating services", error);
    return res.json({ message: "Error in creating", success: false });
  }
});

module.exports = router;

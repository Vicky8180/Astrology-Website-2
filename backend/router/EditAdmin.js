const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const AdminSchema = require('../model/adminSchema');
const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Change extension based on file type
    },
  });

  const upload = multer({ storage: storage });

router.put('/editadmin', upload.single('image'), async (req, res) => {
  try {
    const { adminName,
        adminEmail,
         phone,
         facebook,
         instagram,
         whatsapp,
         state,
         city,
         zipcode,  
        about,
         street,
         youtube} = req.body;

         const image = req.file ? req.file.path : "default-image-path.jpg";
    // Check if image is provided, if not, set default image URL
    const update = {
        adminName,
        adminEmail,
         phone,
         facebook,
         instagram,
         whatsapp,
         image,
         state,
         city,
         zipcode,  
        about,
         street,
         youtube    };

    const filter = { adminEmail};
    const updatedData = await AdminSchema.findOneAndUpdate(filter, update, { new: true });

    if (updatedData) {
      return res.json({
        success: true,
        message: "Admin data updated",
        data: updatedData
      });
    } else {
      return res.json({ success: false,
        message: "Admin data is not updated"
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Error in updating admin data"
    });
  }
});

module.exports = router;

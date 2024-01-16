const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const HoroscopeSchema = require('../../model/horoscope/horoscopeSchema');

router.put('/horoupdate',jsonParser, async (req, res) => {
  try {
    const {image, inEnglish, inHindi, horotype, fromdate, todate, writter, email } = req.body;

    // Check if image is provided, if not, set default image URL
    const update = {
      inEnglish,
      inHindi,
      horotype,
      fromdate,
      todate,
      writter,
      email,
      // image
    //   image: image ? image : 'https://example.com/default-image.jpg' // Use default image URL if image is not provided
    };

    const filter = { horotype };
    const updatedData = await HoroscopeSchema.findOneAndUpdate(filter, update, { new: true , upsert:true});

    if (updatedData) {
      return res.json({
        success: true,
        message: "Horoscope updated",
        data: updatedData
      });
    } else {
      return res.json({ success: false });
    }
  } catch (error) {
    console.log("Error in horoUpdate", error);
    res.json({
      success: false,
      message: "Error in updating horoscope"
    });
  }
});

module.exports = router;

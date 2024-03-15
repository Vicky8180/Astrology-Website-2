const express = require("express");
const TransitionSchema = require("../../model/TransitionSchema");
const router = express.Router();

router.get("/getindividualtrans", async (req, res) => {
  try {
    // Extract email from request query parameters
    const { email } = req.query;
    console.log(req.query)

    // Validate if the email is provided
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required in the query parameters.",
      });
    }

    // Find transitions by email using the TransitionSchema
    const transitions = await TransitionSchema.find({ email });

    return res.json({
      success: true,
      message: "Transitions fetched successfully",
      transitions,
    });
  } catch (error) {
    console.error("Error fetching transitions:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch transitions",
    });
  }
});

module.exports = router;

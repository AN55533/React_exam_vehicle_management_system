const express = require("express");
const router = express.Router();
const vehicle = require("../models/vehicle");
 const verifyToken = require("../middleware/authmiddleware.js")


router.get("/vehicle_details",verifyToken, async (req, res) => {
  const details = await vehicle.find({});
  res.json(details);
});


router.post("/add-vehicledetails", async (req, res) => {
  try {
    const data = req.body;
    const result = await vehicle.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

module.exports = router;
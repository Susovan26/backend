const express = require("express");
const router = express.Router();
const pool = require("../db");

// ✅ GET route add করুন
router.get("/", (req, res) => {
  res.send("Contact API working");
});

// POST insert
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    await pool.query(
      "INSERT INTO cur_contact(name,email,phone,message) VALUES($1,$2,$3,$4)",
      [name, email, phone, message]
    );

    res.send("Data saved successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data");
  }
});

module.exports = router;
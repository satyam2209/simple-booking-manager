const express = require("express");
const db = require("../db");
const router = express.Router();

// create booking
router.post("/", (req, res) => {
  const { name, date, destination } = req.body;

  if (!name || !date || !destination) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "insert into bookinglists (name, date, destination) VALUES (?, ?, ?)";
  db.query(sql, [name, date, destination], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ id: result.insertId, name, date, destination });
  });
});

// get list of all bokings
router.get("/", (req, res) => {
  const sql = "select * from bookinglists order by created_at desc";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});

module.exports = router;

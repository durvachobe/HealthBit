const express = require("express");

const api = express.Router();

const db = require("../../utils/db");
const {
  createTable,
  PATIENT_TABLE_QUERY,
  DOCTORS_TABLE_QUERY,
} = require("../../utils/queries");

api.get("/doctors", (req, res) => {
  createTable(DOCTORS_TABLE_QUERY)
    .then(() => {
      const sql =
        "SELECT first_name, last_name, email, specialisation FROM doctors";

      db.query(sql, (err, result) => {
        if (err) console.log(err);

        res.json(result);
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

api.get("/patients", (req, res) => {
  createTable(PATIENT_TABLE_QUERY)
    .then(() => {
      const sql =
        "SELECT first_name, last_name, email, address, phone_no FROM patient";

      db.query(sql, (err, result) => {
        if (err) console.log(err);

        res.json(result);
      });
    })
    .catch((err) => res.status(400).send(err));
});

// api.get();

module.exports = api;

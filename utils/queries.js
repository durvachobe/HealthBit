const db = require("./db");

const ADMIN_TABLE_QUERY =
  "CREATE TABLE IF NOT EXISTS `admin` ( `admin_id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(45) DEFAULT NULL, `last_name` varchar(45) DEFAULT NULL, `email` varchar(45) DEFAULT NULL, `phone_no` varchar(45) DEFAULT NULL, `designation` varchar(45) DEFAULT NULL, `password` varchar(45) DEFAULT NULL, `salary` varchar(45) DEFAULT NULL, `address` varchar(45) DEFAULT NULL, PRIMARY KEY (`admin_id`) )";
const PATIENT_TABLE_QUERY =
  "CREATE TABLE IF NOT EXISTS `patient` ( `patient_id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(45) DEFAULT NULL, `last_name` varchar(45) DEFAULT NULL, `address` varchar(45) DEFAULT NULL, `email` varchar(45) DEFAULT NULL, `phone_no` char(10) DEFAULT NULL, `password` varchar(45) DEFAULT NULL, `disease` varchar(45) DEFAULT NULL, PRIMARY KEY (`patient_id`) )";
const BILL_TABLE_QUERY =
  "CREATE TABLE IF NOT EXISTS `bill` ( `bill_id` int NOT NULL AUTO_INCREMENT, `medicine_cost` int DEFAULT NULL, `operation_charge` int DEFAULT NULL, `room_charge` int DEFAULT NULL, `misc_charge` int DEFAULT NULL, `patient_id` int DEFAULT NULL, PRIMARY KEY (`bill_id`) )";
const DOCTORS_TABLE_QUERY =
  "CREATE TABLE IF NOT EXISTS `doctors` ( `doctor_id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(45) DEFAULT NULL, `last_name` varchar(45) DEFAULT NULL, `address` varchar(45) DEFAULT NULL, `email` varchar(45) DEFAULT NULL, `salary` varchar(45) DEFAULT NULL, `specialisation` varchar(45) DEFAULT NULL, `shift_time` varchar(45) DEFAULT NULL, `password` varchar(45) DEFAULT NULL, PRIMARY KEY (`doctor_id`) )";
const ASSIGN_DOCTOR_TABLE_QUERY =
  "CREATE TABLE IF NOT EXISTS `assign_doctor` ( `patient_id` int NOT NULL , `doctor_id` int NOT NULL, PRIMARY KEY (`doctor_id`) )";

const createTable = (query) => {
  const promise = new Promise((resolve, reject) => {
    db.query(query, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
  return promise;
};

module.exports = {
  createTable,
  ADMIN_TABLE_QUERY,
  PATIENT_TABLE_QUERY,
  BILL_TABLE_QUERY,
  ASSIGN_DOCTOR_TABLE_QUERY,
  DOCTORS_TABLE_QUERY,
};

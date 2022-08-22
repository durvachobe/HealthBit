const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const db = require('../../../utils/db');

process.env.SECRET_KEY = 'Durva';

router.get('/appointment', (req, res) => {
    const user_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
});
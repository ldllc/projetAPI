const express = require('express');
const router = express.Router();
const event = require('../models/event');


router.get('/', async (req, res) => {
    try 
    {
        const events = await Event.findAll();
        res.json(events);
    }
    catch (error) 
    {
        console.error(error);
        res.status(500).send("erreur");
    }
}
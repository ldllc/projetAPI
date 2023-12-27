const express = require('express');
const router = express.Router();
const event = require('../models/event');


// get all events
router.get('/', async (req, res)=> {
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
});

router.get('/:eventId', async (req, res) => {
    const eventId = req.params.id;
  
    try 
    {
      const event = await Event.findByPk(eventId);
  
      if (!event) 
      {
        return res.status(404).send('Event not found');
      }
  
      res.json(product);
    } 
    catch (error) 
    {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

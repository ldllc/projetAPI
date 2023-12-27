const express = require('express');
const router = express.Router();
const event = require('../models/event');

// recuperer tous les events
router.get('/', async (req, res)=> {
    try 
    {
        const events = await Event.findAll();
        res.json(events);
    }
    catch (error) 
    {
        console.error(error);
        res.status(500).send("error");
    }
});

// recuperer un event avec son id
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
      res.status(500).send('error');
    }
  });


  //recuperer tous les evenement d'un certain type
  router,get('/:eventType', async (req, res) => {
    const eventType = req.params.eventType;

    try
    {
        const eventOfType = await Event.findAll({where: {typeOfEvent: eventType}});
    }
    catch (error)
    {
        console.error(error);
        res.status(500).send('error');
    }
  });



  //supprimer un event avec son id 
  router.delete('/:eventId', async (req, res) => {
    const eventId = req.params.id;
  
    try 
    {
      const event = await Event.findByPk(eventId);
  
      if (!event) {
        return res.status(404).send('Event not found');
      }
  
      await event.destroy();
  
      res.send('event deleted successfully');
    } 
    catch (error) 
    {
      console.error(error);
      res.status(500).send('error');
    }
  });   
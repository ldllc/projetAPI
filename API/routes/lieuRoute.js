const express = require('express');
const router = express.Router();
const Lieu = require('../models/lieu');

// Get all lieux
router.get('/', async (req, res) => {
  try {
    const lieux = await Lieu.findAll();
    res.json(lieux);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get a specific lieu by id
router.get('/:id', async (req, res) => {
  const lieuId = req.params.id;

  try {
    const lieu = await Lieu.findByPk(lieuId);

    if (!lieu) {
      return res.status(404).send('Lieu not found');
    }

    res.json(lieu);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new lieu
router.post('/', async (req, res) => {
  const { nom, adresse } = req.body;

  try {
    const newLieu = await Lieu.create({ nom, adresse });
    res.json(newLieu);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update a lieu by id
router.put('/:id', async (req, res) => {
  const lieuId = req.params.id;
  const { nom, adresse } = req.body;

  try {
    const lieu = await Lieu.findByPk(lieuId);

    if (!lieu) {
      return res.status(404).send('Lieu not found');
    }

    // Update the lieu attributes
    lieu.nom = nom;
    lieu.adresse = adresse;

    await lieu.save();

    res.json(lieu);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a lieu by id
router.delete('/:id', async (req, res) => {
  const lieuId = req.params.id;

  try {
    const lieu = await Lieu.findByPk(lieuId);

    if (!lieu) {
      return res.status(404).send('Lieu not found');
    }

    await lieu.destroy();

    res.send('Lieu deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

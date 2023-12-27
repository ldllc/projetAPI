const express = require('express');
const router = express.Router();
const Product = require('../models/produits');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  const { nom, prix, quantite } = req.body;

  try {
    const newProduct = await Product.create({ nom, prix, quantite });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/:id', async (req, res) => {
  const productId = req.params.id;
  const { nom, prix, quantite } = req.body;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    product.nom = nom;
    product.prix = prix;
    product.quantite = quantite;

    await product.save();

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    await product.destroy();

    res.send('Product deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
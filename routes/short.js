const express = require('express');
const router = express.Router();
const Short = require('../models/media/shortModel');

router.post('/', async (req, res) => {
  try {
    const short = new Short(req.body);
    await short.save();
    res.status(201).send(short);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const short = await Short.find({});
    res.status(200).send(short);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const short = await Short.findById(req.params.id);
    if (!short) {
      return res.status(404).send();
    }
    res.status(200).send(short);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const short = await Short.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!short) {
      return res.status(404).send();
    }
    res.status(200).send(short);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const short = await Short.findByIdAndDelete(req.params.id);
    if (!short) {
      return res.status(404).send();
    }
    res.status(200).send({ message: "short deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

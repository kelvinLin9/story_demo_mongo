const express = require('express');
const router = express.Router();
const Photos = require('../../models/media/photosModel');

router.post('/', async (req, res) => {
  try {
    const photos = new Photos(req.body);
    await photos.save();
    res.status(201).send(photos);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const photos = await Photos.find({});
    res.status(200).send(photos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const photos = await Photos.findById(req.params.id);
    if (!photos) {
      return res.status(404).send();
    }
    res.status(200).send(photos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const photos = await Photos.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!photos) {
      return res.status(404).send();
    }
    res.status(200).send(photos);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const photos = await Photos.findByIdAndDelete(req.params.id);
    if (!photos) {
      return res.status(404).send();
    }
    res.status(200).send({ message: "photos deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

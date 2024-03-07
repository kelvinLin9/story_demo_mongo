const express = require('express');
const router = express.Router();
const Stream = require('../../models/media/streamModel');

router.post('/', async (req, res) => {
  try {
    const stream = new Stream(req.body);
    await stream.save();
    res.status(201).send(stream);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/bulk', async (req, res) => {
  try {
    const Streams = await Stream.insertMany(req.body);
    res.status(201).send(Streams);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.get('/', async (req, res) => {
  try {
    const stream = await Stream.find({});
    res.status(200).send(stream);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const stream = await Stream.findById(req.params.id);
    if (!stream) {
      return res.status(404).send();
    }
    res.status(200).send(stream);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const stream = await Stream.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!stream) {
      return res.status(404).send();
    }
    res.status(200).send(stream);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const stream = await Stream.findByIdAndDelete(req.params.id);
    if (!stream) {
      return res.status(404).send();
    }
    res.status(200).send({ message: "stream deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

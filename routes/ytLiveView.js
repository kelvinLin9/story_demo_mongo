const express = require('express');
const router = express.Router();
const YtLiveViewModel = require('../models/media/ytLiveViewModel'); 

router.post('/', async (req, res) => {
  try {
    const ytLiveView = new YtLiveViewModel(req.body);
    await ytLiveView.save();
    res.status(201).send(ytLiveView);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const ytLiveViews = await YtLiveViewModel.find({});
    res.status(200).send(ytLiveViews);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const ytLiveView = await YtLiveViewModel.findById(req.params.id);
    if (!ytLiveView) {
      return res.status(404).send();
    }
    res.status(200).send(ytLiveView);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const ytLiveView = await YtLiveViewModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!ytLiveView) {
      return res.status(404).send();
    }
    res.status(200).send(ytLiveView);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const ytLiveView = await YtLiveViewModel.findByIdAndDelete(req.params.id);
    if (!ytLiveView) {
      return res.status(404).send();
    }
    res.status(200).send({ message: "YtLiveViewModel deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

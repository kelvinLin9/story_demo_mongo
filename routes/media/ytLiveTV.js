const express = require('express');
const router = express.Router();
const { YTLiveTV } = require('../../models/media/ytModel'); 


router.post('/', async (req, res) => {
  try {
    const ytLiveTV = new YTLiveTV(req.body);
    await ytLiveTV.save();
    res.status(201).send(ytLiveTV);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/bulk', async (req, res) => {
  try {
    const ytLiveTVs = await YTLiveTV.insertMany(req.body);
    res.status(201).send(ytLiveTVs);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const ytLiveTVs = await YTLiveTV.find({});
    res.status(200).send(ytLiveTVs);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const ytLiveTV = await YTLiveTV.findById(req.params.id);
    if (!ytLiveTV) {
      return res.status(404).send();
    }
    res.status(200).send(ytLiveTV);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const ytLiveTV = await YTLiveTV.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!ytLiveTV) {
      return res.status(404).send();
    }
    res.status(200).send(ytLiveTV);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const ytLiveTV = await YTLiveTV.findByIdAndDelete(req.params.id);
    if (!ytLiveTV) {
      return res.status(404).send();
    }
    res.status(200).send({ message: "ytLiveTV deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;
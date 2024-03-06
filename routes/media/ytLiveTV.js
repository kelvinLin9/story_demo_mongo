const express = require('express');
const router = express.Router();
const YtModel = require('../../models/media/ytModel'); 



// async function listAllIds() {
//   try {
//     const ids = await YtModel.find({}).select('_id');
//     console.log(ids);
//   } catch (error) {
//     console.error('Error fetching IDs:', error);
//   }
// }

// listAllIds();


router.post('/', async (req, res) => {
  try {
    const ytLiveTV = new YtModel(req.body);
    await ytLiveTV.save();
    res.status(201).send(ytLiveTV);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/bulk', async (req, res) => {
  try {
    const ytLiveTVs = await YtModel.insertMany(req.body);
    res.status(201).send(ytLiveTVs);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const ytLiveTVs = await YtModel.find({});
    res.status(200).send(ytLiveTVs);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const ytLiveTV = await YtModel.findById(req.params.id);
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
    const ytLiveTV = await YtModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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
    const ytLiveTV = await YtModel.findByIdAndDelete(req.params.id);
    if (!ytLiveTV) {
      return res.status(404).send();
    }
    res.status(200).send({ message: "YtModel deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;
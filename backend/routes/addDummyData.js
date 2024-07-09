const express = require('express');
const esClient = require('../elasticsearch');
const iphoneData = require('../data/iphoneData');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    for (const doc of iphoneData) {
      await esClient.index({
        index: 'iphones',
        id: doc.id,
        body: doc
      });
    }
    await esClient.indices.refresh({ index: 'iphones' });
    res.send('Dummy data added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding dummy data');
  }
});

module.exports = router;

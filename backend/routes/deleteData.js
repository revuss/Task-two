const express = require('express');
const esClient = require('../elasticsearch');

const router = express.Router();

router.delete('/', async (req, res) => {
  try {
    await esClient.indices.delete({ index: 'iphones' });
    res.send('iPhone data deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting iPhone data');
  }
});

module.exports = router;

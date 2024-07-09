const express = require('express');
const esClient = require('../elasticsearch');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await esClient.search({
      index: 'iphones',
      body: {
        query: {
          match_all: {}
        }
      }
    });

    res.json(result.hits.hits);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving all documents');
  }
});

module.exports = router;

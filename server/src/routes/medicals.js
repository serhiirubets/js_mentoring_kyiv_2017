const express = require('express');
const router = express.Router();
const dataService = require('../../services/data');

router.get('/', function (req, res) {
  dataService.getData()
    .then((data) => {
      res.json(data);
    })
});

router.post('/', (req, res) => {
  const { name, brand, price } = req.body;

  const medical = {
    name,
    price,
    brand
  };

  dataService.saveData(medical)
    .then(() => {
      res.end('data saved');
    })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  dataService.getDataById(id)
    .then((data) => {
      res.render('index', { data: [data] });
    })
});

module.exports = router;

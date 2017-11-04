const fs = require('fs');
const json2csv = require('json2csv');

const fields = ['id', 'name', 'brand', 'company', 'price', 'isbn'];
const {PATH_TO_CSV} = require('../config');

module.exports = (req, res) => {
  const { name, brand, price } = req.body;

  const medical = {
    name,
    price,
    brand,
  };

  const csv = json2csv({ data: medical, fields, hasCSVColumnTitle: false });

  fs.appendFile(PATH_TO_CSV, `\n${csv}`, (err) => {
    if (err) throw err;
    console.log('file saved');
  });
};

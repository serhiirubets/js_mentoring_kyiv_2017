const csv = require('csvtojson');
const { PATH_TO_CSV } = require('../config');

const data = [];

module.exports = (req, res) => {
  csv()
    .fromFile(PATH_TO_CSV)
    .on('json', (jsonObj) => {
      data.push(jsonObj);
    })
    .on('done', (error) => {
      if (error) {
        throw error;
      }

      const id = req.params.id;

      if (id) {
        console.log(id);
        const medicalData = data.find(item => item.id === id);

        if (medicalData) {
          console.log(medicalData);
          res.render('index', { data: [medicalData] });
        }
      } else {
        res.render('index', { data });
      }
    });
};


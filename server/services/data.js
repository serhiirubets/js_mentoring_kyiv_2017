const fs = require('fs');
const csv = require('csvtojson');
const json2csv = require('json2csv');
const shortid = require('shortid');
const fields = require('../config.json').csvHeaders;

module.exports = {
  getData() {
    return new Promise((resolve) => {
      const data = [];
      csv()
        .fromFile('MOCK_DATA.csv')
        .on('json', (jsonObj) => {
          data.push(jsonObj);
        })
        .on('done', () => {
          resolve(data);
        });
    });
  },

  saveData(data) {
    data.id = shortid.generate();
    const csv = json2csv({ data, fields, hasCSVColumnTitle: false });

    return new Promise((resolve) => {
      fs.appendFile('MOCK_DATA.csv', `\n${csv}`, () => {
        resolve();
      });
    });
  },

  getDataById(id) {
    return new Promise((resolve) => {
      this.getData()
        .then((data) => {
          resolve(data.find(item => item.id === id));
        })
    })
  }
};

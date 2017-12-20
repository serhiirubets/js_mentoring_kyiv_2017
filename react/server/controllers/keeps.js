const mongoose = require('mongoose');
const Keep = mongoose.model('Keep');
mongoose.Promise = global.Promise;

exports.getAllKeeps = (req, res) => {
  Keep.find()
    .then((keeps) => {
      res.json(keeps);
    });
};

exports.getKeepById = (req, res) => {
  const { id } = req.params;

  Keep.findById(id)
    .then(response => {
      res.json({id: response._id, title: response.title})
    });
};

exports.createKeep = (req, res) => {
  const keep = new Keep(req.body);
  keep.save()
    .then((keep) => {
      res.json({title: keep.title, _id: keep._id});
    })
    .catch(() => {
      res.error('Some error');
    });
};

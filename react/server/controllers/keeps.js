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
  res.send('works')
};

exports.createKeep = (req, res) => {
  const keep = new Keep(req.body);
  keep.save()
    .then((keep) => {
      res.json({title: keep.title, id: keep._id});
    })
    .catch(() => {
      res.error('Some error');
    });
};

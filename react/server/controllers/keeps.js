const mongoose = require('mongoose');
const Keep = mongoose.model('Keep');
mongoose.Promise = global.Promise;

const getAllKeeps = (req, res) => {
  Keep.find()
    .then((keeps) => {
      res.json(keeps);
    });
};
exports.getAllKeeps = getAllKeeps;

exports.getKeepById = (req, res) => {
  const { id } = req.params;

  Keep.findById(id)
    .then(response => {
      res.json({id: response._id, title: response.title, text: response.text, tags: response.tags})
    });
};

exports.addKeepFavorite = (req, res) => {
  const { id } = req.params;

  Keep.findById(id)
    .then((keep) => {
      keep.favorite = !keep.favorite;
      keep.save(() => getAllKeeps(req, res));
    });
};

exports.getKeepByQuery = (req, res) => {
  const {query} = req.params;

  Keep
    .find({ $text: { $search: query } })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
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

exports.deleteKeep = (req, res) => {
  const { id } = req.params;

  return Keep.findByIdAndRemove(id)
    .then(() => {
      getAllKeeps(req, res);
    });
};

exports.updateKeep = (req, res) => {
  console.log(req.body);
  Keep.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
      getAllKeeps(req, res);
    });
};

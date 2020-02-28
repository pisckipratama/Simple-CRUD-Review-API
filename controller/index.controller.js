const reviewSchema = require('../models/index.models');

const getData = (req, res, next) => {
  reviewSchema.find((err, data) => {
    if (err) return next(err);
    res.json({
      message: "show all data",
      data
    });
  })
}

const addData = (req, res, next) => {
  reviewSchema.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json({
      message: "data added",
      post
    });
  })
}

const getOne = (req, res, next) => {
  reviewSchema.findById(req.params.id, (err, data) => {
    if (err) return next(err);
    res.json({
      message: "data found",
      data
    });
  })
}

const editData = (req, res, next) => {
  reviewSchema.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json({
      message: "data edited",
      post
    });
  })
}

const deleteData = (req, res, next) => {
  reviewSchema.findByIdAndDelete(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json({
      message: "data deleted",
      post
    })
  })
}

module.exports = {
  getData,
  addData,
  getOne,
  editData,
  deleteData
};
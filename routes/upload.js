var express = require('express');
var multer  = require('multer');

var router = express.Router();
var upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  console.log(req.files);
  // req.body will contain the text fields, if there were any
  console.log(req.body);
  next();
});

router.post('/upload', function (req, res, next) {
  res.json({
    success: true,
    files: req.files
  });
});

module.exports = router;

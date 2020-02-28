const express = require('express');
const router = express.Router();
const review = require('../controller/index.controller')

/* GET home page. */
router.get('/', (req, res) => res.json({status: "API it's working", message: "Happy coding!"}));

/* GET API */
router.get('/api', review.getData);
router.get('/api/:id', review.getOne);
router.post('/api', review.addData);
router.put('/api/:id', review.editData);
router.delete('/api/:id', review.deleteData);

module.exports = router;

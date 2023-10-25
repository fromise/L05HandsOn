var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/categories', function(req, res, next){
  models.category.findAll({}).then(categoriesFound => {
    res.render('categories', {
      categories: categoriesFound
    })
  })
});

module.exports = router;

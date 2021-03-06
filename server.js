var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require("fs");

var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/list', function (req, res) { 
  fs.readdir('problems', function(err, files) {
    res.json(files);
  });


});

app.get('/get/:problem_id', function (req, res) {
  var problem_id = req.params.problem_id;
  request('https://projecteuler.net/problem='+problem_id, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      var title = $('h2').html();
      var problem = $('[role=problem]').html();
      problem = problem.replace(/project\//,'https://projecteuler.net/project/')
      res.json({t:title,p:problem});
    }
  })
});
app.use('/problems', express.static("problems"));
app.use('/data', express.static("data"));
app.use(express.static("public"));
app.listen(app.get('port'));
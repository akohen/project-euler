var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/get/:problem_id', function (req, res) {
  var problem_id = req.params.problem_id;
  console.log(problem_id);
  request('https://projecteuler.net/problem='+problem_id, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      var title = $('h2').html();
      var problem = $('[role=problem]').html();
      res.json({t:title,p:problem});
    }
  })
});
app.use(express.static(__dirname));
app.listen(app.get('port'));
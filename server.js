var express = require('express');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/api/rest', function(req, res){
  res.write('test');
  res.end();
});
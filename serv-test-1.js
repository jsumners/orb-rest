var http = require('http');
var url = require('url');
var mysql = require ('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : 'orb'
});


//var post  = {id: 1, title: 'Hello MySQL'};
//var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {
  // Neat!
//});
//console.log(query.sql);




httpServer = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World\n');

  var params = url.parse(req.url,true).query;
  console.log(params);

    //var a = params.number1;
    //var b = params.number2;

    //var numA = new Number(a);
    //var numB = new Number(b);

    //var numOutput = new Number(numA + numB).toFixed(0);

    //res.write(numOutput);
    //res.end();
    //
    connection.connect();

    var query = connection.query('SELECT * FROM parents LIMIT 3', function (error, rows, fields) {
      console.log(rows[1].COUNTRY);
      res.end(rows[1].COUNTRY);
      connection.end();
    });

});

httpServer.listen(1337, "192.168.1.68", (err) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }
  console.log('Server running at http://192.168.1.68:1337/');
});

var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://127.0.0.1/hello";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

              
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1/mydb";

const uri = "mongodb://127.0.0.1";
      const client = new MongoClient(uri);
const main = async () => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
       
      });
      
      await client.connect();
    const db = client.db("mydb");
    const collection = db.collection("p1");
  
    // await collection.insertOne(data1);
  
    // const data = await collection.countDocuments({ price: { $gt: 346 } });
    // const data2= await collection.find({ price: { $eq: 3466 } }).toArray();
    // console.log(data);
    // console.log(data2);
    return "done";
  };
  
  main()
    .then(console.log())
    .catch((e) => console.log(e))
    .finally(() => client.close());
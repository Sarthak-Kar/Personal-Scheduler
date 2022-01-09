const express = require("express");
const app = express();
const Datastore = require("nedb");

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json());

const database = new Datastore("databse.db");

app.post("/api", (request, response) => {
  database.remove({}, { multi: true }, function (err, numRemoved) {
    database.loadDatabase(function (err) {
      // done
    });
  });
  database.loadDatabase();
  database.insert(request.body);
});

app.get("/api", (request, response) => {
  database.loadDatabase();
  database.find({}, (err, output) => {
    if (err) {
      response.end();
      return;
    }
    //dat=JSON.stringify(output);
    response.json({ output });
  });
});

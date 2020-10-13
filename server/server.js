const express = require('express');
const app = express();

const API_PORT = process.env.PORT || 8080;//this is port API 8080, you can use any port

app.use(express.json());//this project will use the express method for json type

app.get("/:name", (req, res) => {
  res.send("HI, " + req.params.name);//test the port localhost:8080/Fajri at Postman application
});

app.listen(API_PORT, () => console.log(`Listening on Port ${API_PORT}`));
//this app now has the function of listen

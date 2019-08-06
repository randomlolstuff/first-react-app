var express = require("express");
var app = express();
var http=require('http').createServer(app);

// io.set("transports",["websocket","polling"]);
// io.set('origins',"http://localhost:3001")
var port = 3001;
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// var moment = require('moment');
// moment().format();

var corsOptions={
    origin:true,
    optionsSuccessStatus:200
};
app.options("*",cors(corsOptions));
app.use(cors(corsOptions));



var mongoose = require("mongoose");
mongoose.Promise = global.Promise; mongoose.connect("mongodb://localhost:27017/node-demo");

var nameSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true,
        required: true,   
    },
    startdate: {
        type: String,
        trim: true,
        required: true,
    },
    enddate: {
      type:String,
      trim:true,
      required:true,
    },

    email: {
        type: String,
        trim: true,
        required: true,
    },
    

});


var User = mongoose.model("User", nameSchema);



  
  

  





app.post("/submit", (req, res) => {
    console.log("hello api")


    var myData = new User(req.body);
    console.log(myData);
    myData.save()
        .then(item => {


            res.send({ message: "item saved to database" });
        })
        .catch(err => {

            res.status(400).send("unable to save to database");
        });
});











http.listen(port, () => {
    console.log("Server listening on port " + port);
});




app.post("/api/listing", (req, res, next) => {
  
  
  User.find({}, function (err, userInfo) {
  if (err || !userInfo) {
  console.log(err)
  next(err);
  } else {
  console.log({userInfo});
  res.status(200).json({userInfo})
  }
  
  })
});
  
















var express = require("express");
var app = express();
var port = 3001;
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;



var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");

var nameSchema = new mongoose.Schema({
firstName:{
type: String,
trim:true,
required:true,
},
lastName:{ 
 type :String,
 trim:true,
 required:true,
},

username:{ 
    type :String,
    trim:true,
    required:true,
   },
password:{
type : String,
trim:true,
required : true,
}


});
nameSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

var User = mongoose.model("User", nameSchema);

app.post("/submit", (req, res) => {
    console.log("hello api")


var myData = new User(req.body);
console.log(myData);
myData.save()
.then(item => {

res.send({message:"item saved to database"});
})
.catch(err => {

res.status(400).send("unable to save to database");
});
});


app.post("/Signin",(req,res,next)=>{
    console.log("api hitted")
    UserModel.findOne({email:req.body.email}, function(err, userInfo){
        if (err) {
         next(err);
        } else {
   if(bcrypt.compareSync(req.body.password, userInfo.password)) {
   const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
   res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
   }else{
   res.json({status:"error", message: "Invalid email/password!!!", data:null});
   }
        }
       });
    },

);

app.get("/getname", (req, res) => {
//var myData = new User(req.body);
// myData.save()
// .then(item => {
// res.send("item saved to database");
// })
// .catch(err => {
// res.status(400).send("unable to save to database");
// });
User.find({lastName: 'world'}, function(error, comments) {
console.log(comments); //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.
});
});
// app.use(express.static("./"))
// app.use("*", (req, res) => {
// res.sendFile(__dirname + "/index.html");
// });

app.listen(port, () => {
console.log("Server listening on port " + port);
});
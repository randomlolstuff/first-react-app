var express = require("express");
var app = express();
var http=require('http').createServer(app);
var io = require('socket.io')(http);
io.set("transports",["websocket","polling"]);
// io.set('origins',"http://localhost:3001")
var port = 3001;
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var corsOptions={
    origin:true,
    optionsSuccessStatus:200
};
app.options("*",cors(corsOptions));
app.use(cors(corsOptions));


io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function (data) {
        console.log(data);
        socket.emit('chat message',data)
      });
  });
  










const saltRounds = 10;
var cookieParser = require('cookie-parser')

var cookieSession = require('cookie-session')
app.set('trust proxy', 1)

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours

  }))
  

//app.use(cookieParser())






var mongoose = require("mongoose");
mongoose.Promise = global.Promise; mongoose.connect("mongodb://localhost:27017/node-demo");

var nameSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,   
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },

    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    }


});
nameSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

var User = mongoose.model("User", nameSchema);



  const auth=((req,res)=>{
    jwt.verify(req.session.token, 'puru', function(err, decoded) {
        console.log(decoded,err) // bar
        if(err) {
            req.session.token = '';
            res.status(403).send({message: 'unauthorized'})
        } else {
            return true;
        }
      });
      
    
    //   console.log('header',req.header.x)
    // const token = jwt.sign({ id: req.header.x}, "puru", { expiresIn: '1h' });

    // console.log('auth',token)

    
    // if(req.session.app==token){
    //     console.log("user authenticated")

    // }
    // else{
    //     console.log("user not authenticated")
    // }
  })

  app.post("/api/getusername",(req,res)=>{
      auth(req,res)
      res.json({username:"xyz"})
  })





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


app.post("/api/Signin", (req, res, next) => {
    console.log('session', req.session.token)

    // console.log("sign in api hitted")
    // console.log(req.body.password)
    User.findOne({ username: req.body.email }, function (err, userInfo) {
        if (err || !userInfo) {
            console.log(err)
            next(err);
        } else {
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                delete userInfo["password"]
                const token = jwt.sign({ id: userInfo.username }, "puru", { expiresIn: '1hr'});
                //req.session.app={};
                
                req.session.token = token;

                //console.log(req.session.app)
                //console.log(req.body.email)
                // res.cookie("jwt_key",token,{
                //     maxAge:'315360000',
                //     httpOnly:false
                // })
                
                res.status(200).json({"token":token})
                // res.json({ status: "success", message: "user found!!!", data: { user: userInfo, token: token } });
            } else {
                res.json({ status: "error", message: "Invalid email/password!!!", data: null });
            }
        }
    });
},

);

app.post('/api/logout',  (req, res) => {
    auth(req,res)
    
        req.session.token = 'logged out';
        console.log(req.session.token);
        res.status(200).json({message: 'logout success'});
    
    
    
   
        
    
    
})

app.post('/api/chat',(req,res)=>{
    auth(req,res)
   
    res.status(200).json({message:'chat api hitted'})

    
})





// app.get("/getname", (req, res) => {
//     //var myData = new User(req.body);
//     // myData.save()
//     // .then(item => {
//     // res.send("item saved to database");
//     // })
//     // .catch(err => {
//     // res.status(400).send("unable to save to database");
//     // });
//     User.find({ lastName: 'world' }, function (error, comments) {
//         console.log(comments); //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.
//     });
// });
// app.use(express.static("./"))
// app.use("*", (req, res) => {
// res.sendFile(__dirname + "/index.html");
// });

http.listen(port, () => {
    console.log("Server listening on port " + port);
});

var express = require('express');
var router = express.Router();

let users = [{
  username: "admin",
  role: "Admin",
  password:"123123"},
  {username: "user",
    role: "User",
    password:"123123"}

];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req,res,next){
  if(req.body.password && req.body.username && req.body.role && !users.find(person=> {return person.username === req.body.username})){
    users.push(req.body);
    res.send("Registered:"+users.length + " users.");
  }
  else{
    res.send("Error. Try again.");
  }


});

router.post('/login', function(req,res,next){
  if(users.find(person=> {return person.username === req.body.username && person.password === req.body.password})){
    res.send("Logged in as: "+req.body.username);
  }
  else{
    res.send("Error. Wrong username or password");
  }
});

router.get('/list', function(req,res,next){
 res.json(users);
});

module.exports = router;

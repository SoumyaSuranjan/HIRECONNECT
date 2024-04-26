const exp = require("express");
const app = exp();

const ejs = require("ejs");




app.set("view engine","ejs");

app.use(exp.static("public"));

app.get("/",function(req,res){
    res.render("home");
});

app.get("/companies",function(req,res){
    res.render("companies");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/statistics",function(req,res){
    res.render("statistics");
});

app.get("/company1",function(req,res){
    res.render("company1");
});

app.get("/comany2",function(req,res){
    res.render("comany2");
});

app.get("/company3",function(req,res){
    res.render("company3");
});

app.get("/company4",function(req,res){
    res.render("company4");
});

app.get("/company5",function(req,res){
    res.render("company5");
});

app.get("/company6",function(req,res){
    res.render("company6");
});

app.get("/company7",function(req,res){
    res.render("company7");
});

app.get("/company8",function(req,res){
    res.render("company8");
});

app.get("/company9",function(req,res){
    res.render("company9");
});
app.get("/Mentor",function(req,res){
    res.render("Mentor");
});


app.get("/MentorForm",function(req,res){
    res.render("MentorForm");
});
app.get("/MenteeForm",function(req,res){
    res.render("MenteeForm");
});
app.get("/Study",function(req,res){
    res.render("Study");
});

app.get("/register",function(req,res){
    res.render("register");
});

app.listen(8000, function(){
    console.log("server started on port 8000");
});

var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

//const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

app.post("/sign_up", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var cgpa = req.body.cgpa;

    var data = {
        "name": name,
        "email": email,
        "phno": phno,
        "cgpa":cgpa
    }

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) throw err;
        console.log("Record Inserted Successfully");
    });
    return res.redirect("companies");

})

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('home.ejs');

}).listen(3000);

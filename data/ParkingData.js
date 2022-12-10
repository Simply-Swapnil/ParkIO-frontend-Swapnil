var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://parkit:parkit%402022@cluster0.wbjdiu1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();

ParkingSpace   //Database
slot_details    //Collection


app.post("/signinform", async function(req,res) {
    try {
        const mobilenumber = req.body.cur_phone;
        const password = req.body.cur_password;
        
        const result = await client.db("Insurance_Co").collection("users").findOne({phone: mobilenumber});
        global.id = result._id;

        if(result.password == password) {
            res.redirect('/user-home')
        }
        else {
            res.send("Invalid Login Credentials!")
        }
    }
    catch (error) {
        res.status(400).send("Invalid Login Credentials")
    }
})


app.post("/updateform", function(req, res) {
    client.db("Insurance_Co").collection("users").updateOne({'_id' : id}, {$set: {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    }});
    res.redirect(req.get('referer'))
})
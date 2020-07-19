const express = require("express"); // import express library
const app = express(); // use const "express" from line 1 to create app
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// Use the "faker" package
const faker = require("faker");

// Routes
app.get("/", function(req, res){
    res.render("index.ejs", {page_name: "index"});
});

app.get("/data", function(req, res){
    res.render("data.ejs", {page_name: "data"});
});

app.get("/drug", function(req, res){
    res.render("drug.ejs", {page_name: "drug"});
});

app.get("/patient", function(req, res){
    res.render("patient.ejs", {page_name: "patient"});
});

app.get("/references", function(req, res){
    // Create data object to hold all variables
    let data = {
        page_name: "references", 
        companyName: faker.company.companyName(),
        catchPhrase: faker.company.catchPhrase(),
        image: faker.image.business(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber()
    }
    res.render("references.ejs", data);
});

// Listener - Starting the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");        // callback function
})
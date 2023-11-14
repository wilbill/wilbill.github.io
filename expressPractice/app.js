const path = require('path') //allows usage of file path (its a module)
const express = require('express');
//const { log } = require('console');
const app = express() //calling a child

let myArray =[];
let loginCount=0;

//If u want to use a static directory which serves files, css, images etc, use this line below
app.use(express.static(path.join(__dirname, 'html')/*,{extensions:['html']} */))

//API MIDDLEWARE
app.use(express.urlencoded({extended: false})); //accepts data in json format
app.use(express.json())   //Decodes data sent thru the url form

// app.get("/array", function(req, res, next){
//     console.log(myArray)
//     res.sendFile(path.join(__dirname, "html", "arrays.html"))
// })

//data we get is in body of request(used for debugging)
app.post('/postData', function(req, res){
    console.log(req.body); 
    res.json({message: req.body})
})


 //this starts the app, at port 80, if not provided app wont run
app.listen(80, function(req, res){ 
    console.log("Server is runnning on port 80");
});

//default landing page
app.get('/', function(req, res){ //the forward slash means all pages, get=> 4 getting data from server
    console.log('Hello world'); //the get takes 2 params, 1 is url, 2 is function
    res.send(`<h1>Hello Worlds</h1>`); //req obj has data from client to server, res obj has data 4rm server to client. (mtd used is send)
    loginCount++;
    console.log(loginCount);
})




//serves dynamic pages from client requests, its not used in my code though
// app.get('/:page', (req, res) => {
//     const requestedPage = req.params.page;
//     res.send(path.join(__dirname, 'html',`${requestedPage}`))//I have simplified it here, but can be expanded as below
// });


//404 page
app.use(function(error, req, res, next){
    console.log('404');
    next("Error")
    req.send("404");
})
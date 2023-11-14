const path = require('path') //allows usage of file path (its a module)
const express = require('express');
const app = express() //calling a child


//If u want to use a static directory which serves files, css, images etc, use this line below
app.use(express.static(path.join(__dirname, 'html'), {extensions:['html']}))

// //this can be replaced by the app function up here
// app.get('/',function(req, res){
//     res.sendFile(path.join(__dirname, 'html', 'index.html')) //means go to current dir __dirname,look 4 folder html, get a file index.html
//     //send this file
// })

//API MIDDLEWARE
app.use(express.urlencoded()); //accepts data in json format
app.use(express.json())   //Decodes data sent thru the url form

//
app.post('/postData', function(req, res){
    console.log(req.body); //data we get is in body of request(used for debugging)
})



app.get('/:page', (req, res) => {
    const requestedPage = req.params.page;
    res.send(path.join(__dirname, 'html','${requestedPage}'))//I have simplified it here, but can be expanded as below
});




    // const requestedPage = req.params.page;
    // const filePath = path.join(__dirname, 'html', `${requestedPage}.html`);

    
    // Check if the requested HTML file exists
    // If it exists, send the file; otherwise, send a 404 response
//     res.sendFile(filePath, (err) => {
//       if (err) {
//         res.status(404).send('Page not found');
//       }
//     });
//   });

// app.get('/about', function(req, res, next){
//     res.sendFile(path.join(__dirname, 'html', 'admin.html'))

// })

app.listen(80, function(req, res){  //this starts the app, at port 80, if not provided app wont run
    console.log("Server is runnning on port 80");
});

//default landing page
app.get('/', function(req, res){ //the forward slash means all pages, get=> 4 getting data from server
    console.log('Hello world'); //the get takes 2 params, 1 is url, 2 is function
    res.send(`<h1>Hello Worlds</h1>`); //req obj has data from client to server, res obj has data 4rm server to client. (mtd used is send)
})

// app.get('/index', function(req, res){
//     console.log('Thank you for supporting this app');
//     res.send('Thank you for supporting this app');
// })



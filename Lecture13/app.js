let path = require('path');
let express = require('express')
let app = express();

const {starting, prev, listen,post} =require('./handlers.js')

//serving static files
app.use(express.static(path.join(__dirname,'html')));

app.use(express.json())
app.use(express.urlencoded({extension:true}));

//start page
app.get('/', starting)

//post request
app.post('/post', post)

app.get('/preview', prev)


app.listen(90, listen)
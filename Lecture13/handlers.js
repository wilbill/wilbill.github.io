
let result;
let hitCount =0;
function prev(req, res){
    res.send(`<h1>Username: ${result.username}+" Password"+${result.password}+" LoginCount="${hitCount}</h1>`);
}

function starting(req, res){
    hitCount++;
    res.send(`<h1>Welcome to the Exams Page</h1>`);
    
}

function listen(req, res){
    console.log("server is running well at port 80")
}

function post(req, res){
    result = req.body;
    console.log(result)
    res.redirect('/preview');
    //res.send("<p>Data is at the post url</p>")
}

module.exports= {starting, prev, listen, post}
const path = require('path');
const express = require('express');
const app = express();

console.log("Public Path: ",__dirname);
app.use(function (req, res, next) {
    var filename = path.basename(req.url);
    console.log(`Fuzzing path: ${__dirname}/${filename}`);
    next();
});

app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.listen(3000)
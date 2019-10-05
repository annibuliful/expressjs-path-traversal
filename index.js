const express = require('express');
const app = express();

app.use(express.static(__dirname));
console.log(__dirname);
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.listen(3000)
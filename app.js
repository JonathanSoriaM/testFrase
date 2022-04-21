const express = require('express');
const bodyparser = require('body-parser');

const app = express()
app.use(bodyparser.json())

const port = 3000
var indexRouter = require('./routes/index');


app.use('/', indexRouter);


app.listen(port, () =>{
console.log("listening to port"+port)
})

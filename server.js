
//var auth=require('./Controllers/Login/auth');
const express = require('express');
const app = express();

const cors = require('cors');
const bodyparser=require('body-parser');

app.use('*',cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

const PORT=3041;


app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))

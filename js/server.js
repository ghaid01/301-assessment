'use strict'

require.config()(express,cors,dotenv);

var express = require('express');
var cors = require('cors');

app.get( function (req, res){
    res.send('home page');
})


var server = app.listen(3000, function (){
    console.log('hello');
})
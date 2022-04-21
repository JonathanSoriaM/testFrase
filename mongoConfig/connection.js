
var express = require('express');
var mongoose = require('mongoose')
const mongoconfig = require('./mongoConfig')

let db = mongoose.createConnection('mongodb://localhost:27017/test',mongoconfig.options)

module.exports = db;
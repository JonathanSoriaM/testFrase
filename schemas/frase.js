var mongoose = require('mongoose');
var FormatoSchema = mongoose.Schema;

var FormatoSchema = new FormatoSchema({
  word: String,
  allowed:Boolean,
  status:String,
  dateCreated :{ type:Date, default : Date.now},
  lastDateUpdated: { type:Date, default : Date.now},
  dateDeleted :{ type:Date, default :''},
},{collection:'formato'})

module.exports.FormatoSchema = FormatoSchema;
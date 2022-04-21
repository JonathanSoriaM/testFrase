var express = require('express');
var router = express.Router();
const mongoconfig = require('../mongoConfig/mongoConfig')
let ObjectId = require('mongodb').ObjectID;
const db = require('../mongoConfig/connection')


let Frase = db.model('frase',mongoconfig.schemaFrase.FormatoSchema)

router.route('/').get(async function(req,res,next){
   let Frases = await Frase.find({});

    
  return res.json(Frases)
}).post(async function  (req,res,next){

  var frase = new Frase(req.body)
 const newFrase = await frase.save();
 return res.json(newFrase)

})

router.route('/fraseID/:id').get(async function(req,res,next){
  let id = req.params.id;
  let getFrase = await Frase.findOne({_id:ObjectId(id) });
 return res.json(getFrase)
})
router.route('/search/:frase').get(async function(req,res,next){
  let frase = req.params.frase;
let searchFrase = await Frase.find({word:frase, allowed:true});
 return res.json(searchFrase)
})

//Dado que existe una fecha en schema de eliminacion se opto por solo actualizar la fecha de eliminacion sin
//teneer que eliminar el archivo de la base de datos
router.route('/delete/:id').delete(async function(req,res,next){
  let id = req.params.id;
  let newDate = new Date;
let deleteFrase = await Frase.updateOne({_id: ObjectId(id )},{$set:{dateDeleted:newDate}});
if(!deleteFrase) console.log('Esta frase no existe')
 return res.json(deleteFrase)
})


router.route('/update/:id/:frase').put(async function(req,res,next){
 
  let id = req.params.id;
  let word = req.params.frase
  let newDate = new Date;
 
let updateFrase = await Frase.updateOne({_id: ObjectId(id )},{$set:{word:word , lastDateUpdated:newDate}});
if(!updateFrase) console.log('Esta frase no existe')
 return res.json(updateFrase)
})

module.exports = router;

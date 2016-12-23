'use strict'

//add models require
let addon = require('../build/Release/addon')

//add functions from routes
function serial(req, res){
  var a = req.body.a
  var b = req.body.b
  var n = Number(req.body.n)
  console.log(n)
  let obj = addon.serialProduct(parseArray(a,n),parseArray(b,n))
  if(isNaN(obj.cpus) || isNaN(obj.time)){
    res
      .status(500)
      .send({message:'Error al calcular el producto de matriz'})
  }else{
    res
      .status(200)
      .send({
        "time" : obj.time,
        "cpus" : obj.cpus
      })
  }
}

function parallel(req, res){
  var a = req.body.a
  var b = req.body.b
  var n = Number(req.body.n)
  console.log(n)
  let obj = addon.parallelProduct(parseArray(a,n),parseArray(b,n))
  if(isNaN(obj.cpus) || isNaN(obj.time)){
    res
      .status(500)
      .send({message:'Error al calcular el producto de matriz'})
  }else{
    res
      .status(200)
      .send({
        "time" : obj.time,
        "cpus" : obj.cpus
      })
  }
}

function generate(n){
  let x = new Array(n);
  for (var i = 0; i < x.length; i++) {
    x[i] = new Array(n);
    for (var j = 0; j < x[i].length; j++) {
      x[i][j] = Math.floor((Math.random() * 10));;
    }
  }
  return x;
}

function parseArray(json, n){

  var array = new Array(n);
  for (var i = 0; i < n; i++) {
    array[i] = new Array(n);
  }
  for (var i = 0; i < json.length; i++) {
    array[json[i].i][json[i].j] = json[i].val;
  }
  return array;
}

function test(req, res){
  var a = req.body.a
  var b = req.body.b
  var n = Number(req.body.n)
  console.log(n)
  let obj = addon.serialProduct(parseArray(a,n),parseArray(b,n))
  if(isNaN(obj.cpus) || isNaN(obj.time)){
    res
      .status(500)
      .send({message:'Error al calcular el producto de matriz'})
  }else{
    res
      .status(200)
      .send({
        "time" : obj.time,
        "cpus" : obj.cpus
      })
  }
}

module.exports = {
  serial,
  parallel,
  test
}

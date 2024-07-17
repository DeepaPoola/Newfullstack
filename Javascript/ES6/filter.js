/*var vote=[10,15,18,20,22]
var c=vote.filter(canvote)
console.log(c)

function canvote(age){
  return age>=18
}*/

var a=[10,15,18,20,22]
var c=a.reduce(canvote)
console.log(c)

function canvote(age){
  return age-1
}
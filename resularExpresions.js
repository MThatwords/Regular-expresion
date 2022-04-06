let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // todo pegado
let result = petRegex.test(petString);// true , si esta dog o cat ...

let fccRegex = /freecodecamp/ig; // i: ignore g:global




function long(s){
  return Math.max(...s.split(" ").map(word => word.length))
}

console.log(long("The quick brown fox jumped over the lazy dog"));


function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, curr){
      return curr> prev ? curr:prev;
        
      })
    });
}

function confirmEnding1(str, target) {
  return  str.endsWith(target)
  
}
function confirmEnding2(str, target) {
  return  str.slice(str.length - target.length) === target
  
}
function confirmEnding3(str, target) {
  let re = new RegExp(target + "$","i")
  return  re.test(str)
  
}
function confirmEnding4(str, target) {
  return  str.slice(- target.length) === target
  
}


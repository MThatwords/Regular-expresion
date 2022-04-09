let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // todo pegado
let result = petRegex.test(petString);// true , si esta dog o cat ...

let fccRegex = /freecodecamp/ig; // i: ignore g:global


let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result1 = quoteSample.match(nonAlphabetRegex).length;

function long(s){
  return Math.max(...s.split(" ").map(word => word.length))
}
//para usar this 
// apply
// bind
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

function repeatStringNumTimes(str, num) {
  let repeated = ""
  for (let i = 0; i < num; i++) {
    repeated = repeated+str
  }
  return repeated;
}

function findElement(arr, func) {

  return     arr[arr.map(func).indexOf(true)];
}

function booWho(bool) {
  return typeof bool==="boolean";
}

function titleCase(str) {
  
  return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1 )).join(" ") ;
}

function titleCaseAlt(str) {
  
  return str.toLowerCase().split(" ").map(word => word.replace(word.charAt(0) ,word.charAt(0).toUpperCase() )).join(" ")  ;
}
//usando 
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n,0,...arr1) ;
  return localArr
}

function bouncer(arr) {
  return arr.filter(Boolean);
}

function getIndexToIns(arr, num) {
  return arr.filter(x=>num>x).length;
}

function mutation(arr) {
  return arr[1].toLowerCase().split("").every(function(letter){
    return arr[0].toLowerCase().indexOf(letter) !==-1
  });
}

function chunkArrayInGroupsA(arr, size) {
  let result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {console.log(size -1);
    if(i%size!==size -1 )temp.push(arr[i]);
    else {
      temp.push(arr[i])
      result.push(temp)
      temp=[]
    }
  }
  return result
}

function chunkArrayInGroupsB(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i+=size) {
    newArr.push(arr.slice(i,i+size))
  }
  return newArr
}
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0;
  while(i< arr.length){
    newArr.push(arr.slice(i,i+size))
    i+=size
  }
  return newArr;
}



console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
function palindrome(str) {
  let s = str.replace(/[^A-Za-z0-9]/gi,"").toLowerCase().split("").filter(n=>n!=' ')
  return s.join("") === s.reverse().join("");
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));

function convertToRoman(num) {
  
  let numbers = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }
  let roman="";
  for(let key of Object.keys(numbers)){
    let temp=0;
    if (num%numbers[key]!=num) {
      temp=Math.trunc(num/numbers[key])
      num = num -Math.trunc(num/numbers[key])*numbers[key]
      roman+= key.repeat(Number(temp))
    }
  }

  return roman;
}

console.log(convertToRoman(36));

function rot13(str) {
  let coded="";

  
  for (let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i)<65 || str.charCodeAt(i)>90){
      coded += String.fromCharCode(str.charCodeAt(i))
    }
    if((str.charCodeAt(i)-13)<65 && str.charCodeAt(i)>=65){
      
      coded +=String.fromCharCode(str.charCodeAt(i)+13)
      
    }
    if((str.charCodeAt(i)-13)>=65 && (str.charCodeAt(i)-13)<=90 ){
      
      coded +=String.fromCharCode(str.charCodeAt(i)-13)
      
    }
  }
  return coded
  // return str.match(/\w/gi).map(n =>n)
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

function telephoneCheck(str) {
  // const regex = [
  //   /^([1]{1}\s)?\d{3}?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  //   /^1 \(\d{3}\) \d{3}-\d{4}$/,
  //   // 1(555)555-5555
  //   // (555)555-5555
  //   /^\(\d{3}\)\d{3}-\d{4}$/,

  //   /1\(\d{3}\)\d{3}-\d{4}$/
  // ]
  let regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/
  // return regex.some(f => f.test(str));
  return regex.test(str)
  //https://www.regextester.com/96826
}


function checkCashRegister(price, cash, cid) {
  let out = {};

  out.status = "INSUFFICIENT_FUNDS";
  out.change = [];
  out.change = cid
  let diff = cash-price
  let temp = 0;
  for(let i = 0; i < cid.length; i++){
    if(diff%cid[i]!=diff){
      
    }
  }
  if(cid)//cid is < change
  return out;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
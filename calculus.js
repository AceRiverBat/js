/*
function calculus() {
    let x = prompt("Choisir un premier chiffre");
    let y = prompt("Choisir un deuxième chiffre");
    let operation = prompt("Choisir une opération");
    
    if(operation=="+"){
      z=Number(x)+Number(y);
    }
    else if(operation=="-"){
      z=Number(x)-Number(y);
    }
    else if(operation=="*"){
      z=Number(x)*Number(y);
    }
    else if(operation=="/"){
       z=Number(x)/Number(y);
    }
    
    return z;
    }

calculus();
console.log(z);
*/
function calculus() {
let x = prompt("Choisir un premier chiffre");
let y = prompt("Choisir un deuxième chiffre");
let ope = prompt("Choisir l'opération a effectuer")

function addition(){
  if(Number(x)+Number(y));
  console.log(Number(x)+Number(y));
}
function soustraction(){
  if(Number(x)-Number(y));
  console.log(Number(x)-Number(y));
}
function multiplication(){
  if(Number(x)*Number(y));
  console.log(Number(x)*Number(y));
}
function division(){
  if(Number(x)/Number(y));
  console.log(Number(x)/Number(y));
}

if(ope=="+"){
  z=addition();
}
else if(operation=="-"){
  z=soustraction();
}
else if(operation=="*"){
  z=multiplication();
}
else if(operation=="/"){
   z=division();
}

return z;
}
calculus();
console.log(z);
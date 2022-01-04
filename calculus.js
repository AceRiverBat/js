let x = Number(prompt("Choisir un premier chiffre"));
let y = Number(prompt("Choisir un deuxième chiffre"));
let ope = prompt("Choisir l'opération a effectuer");

function addition(){
  if(x + y);
  console.log(x + y);
}
function soustraction(){
  if(x - y);
  console.log(x - y);
}
function multiplication(){
  if(x * y);
  console.log(x * y);
}
function division(){
  if(x / y);
  console.log(x / y);
}

if(ope == "+"){
  addition();
}
else if(ope == "-"){
  soustraction();
}
else if(ope == "*"){
  multiplication();
}
else if(ope == "/"){
  division();
}
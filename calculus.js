function calculus() {
    let x = prompt("Choisir un premier chiffre");
    let y = prompt("Choisir un deuxième chiffre");
    let operation = prompt("Choisir une opération");
    
    if(operation=="+"){
      z=Number(x)+Number(y);
    }
    else if(operation=="/"){
      z=Number(x)/Number(y);
    }
    else if(operation=="*"){
      z=Number(x)*Number(y);
    }
    else if(operation=="-"){
       z=Number(x)-Number(y);
    }
    
    return z;
    }

calculus();
console.log(z);



/* 1era Clase de 7Days of Code0*/

let numeroUn = 1
let stringUn = '1'

let numeroTreinta = 30
let stringTreinta = '30'

let numeroDiez = 10
let stringDiez = '10'

function compararUno() {

    /*
    if (COMPARAR numeroUn y stringUn) {
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
    } else {
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
    }
    */
    if (numeroUn == stringUn){    
        console.log(` numeroUn == stringUn numeroUn : numeroUn=${numeroUn}-${typeof(numeroUn)} y stringUn=${stringUn}-${typeof(stringUn)}
        tienen el mismo valor, pero tipos diferentes.`);
       
        alert((` numeroUn == stringUn numeroUn : numeroUn=${numeroUn}-${typeof(numeroUn)} y stringUn=${stringUn}-${typeof(stringUn)}
        tienen el mismo valor, pero tipos diferentes.`));

    }   else {
            console.log(`Las variables numeroUn: ${typeof(nueroUn)} y stringUn: ${typeof(stringUn)} tienen un resultado falso `);
    }
    return
}

function compararTreinta() {

    /*
    if (COMPARAR numeroTreinta y stringTreinta) {
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
    } else {
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
    }

    */
    if (numeroTreinta ==  parseInt(stringTreinta)){    
        console.log(` numeroTreinta ==  parseInt(stringTreinta) : numeroTreinta: ${numeroTreinta}-${typeof(numeroTreinta)} y stringTreinta: ${stringTreinta}-${typeof(stringTreinta)}
        tienen el mismo valor, y el mismo tipo a causa de parseInt.`);
    
        alert((`numeroTreinta ==  parseInt(stringTreinta) : numeroTreinta: ${numeroTreinta}-${typeof(numeroTreinta)} y stringTreinta: ${stringTreinta}-${typeof(stringTreinta)}
        tienen el mismo valor, y el mismo tipo a causa de parseInt.`));

    }   else {
            console.log(`Las variables numeroTreinta: ${typeof(nueroTreinta)} y stringTreinta: ${typeof(stringTreinta)} tienen un resultado falso `);
    }
    return
}

function compararDiez() {
/*
if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}
*/

if (numeroDiez !== stringDiez ){    
   
    console.log(`numeroDiez !== stringDiez : numeroDiez: ${numeroDiez}-${typeof(numeroDiez)} y stringDiez: ${stringDiez}-${typeof(stringDiez)}
    no tienen el mismo valor por la triple comparación (!==).`);

    alert((`numeroDiez !== stringDiez : numeroDiez: ${numeroDiez}-${typeof(numeroDiez)} y stringDiez: ${stringDiez}-${typeof(stringDiez)}
    no tienen el mismo valor, por la triple comparación (!==).`));

}   else {
        console.log(`Las variables numeroDiez: ${typeof(numeroDiez)} y stringDiez: ${typeof(stringDiez)} tienen un resultado falso `);
}
return
}
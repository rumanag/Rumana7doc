

//================================================================ 7daysOfCode= ======================================================

// -------------------------------------------------------Primera Clase0*----------------------------------------------

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


// -------------------------------------------------------Segunda Clase0*----------------------------------------------

function diaDos(){

    alert("¡Saludos a todos! Hoy es el día de preguntas");

    const ciudad = prompt("Escribe tu ciudad: ");
    const msg = `¡Eres de ${ciudad}!. Te haré algunas preguntas personales.`;
    
    alert(msg);

    let nombrePersona= prompt("¿Cuál es tu nombre?");
    let añosPersona = prompt("¿Cuántos años tienes?");   
    let lenguajePrograma = prompt("¿Qué lenguaje de programación estás estudiando?");

    alert(`Hola ${nombrePersona}, tienes ${añosPersona} años y ya estás aprendiendo ${lenguajePrograma}!`);

    let respuestaPersona = prompt(`¿ Te gusta estudiar ${lenguajePrograma}? Responde 1 para SI o 2 para NO`);
    let respuestaBuena = 0

    while (respuestaBuena == 0)  {
       
        let respuestaTrimmed = parseInt(respuestaPersona.trim());

        if  (isNaN(respuestaTrimmed)) {
            respuestaPersona= prompt("La respuesta no es 1 o 2. Por favor responde si te gusta estudiar con 1 = SI, 2=NO");

        }   else if (respuestaTrimmed == 1){
                alert("¡Muy bien! Sigue estudiando y tendrás éxito");
                respuestaBuena=1

        } else{
                alert("¡Oh! Qué  pena... ¿ Ya intentaste aprender otros lenguajes?")
                respuestaBuena=1
        }
    }  
    
    alert("Gracias por su paciencia. ¡Hasta pronto!")   
}

// -------------------------------------------------------Tercera Clase0*----------------------------------------------


function diaTres(){

    alert("¡hola! De nuevo estamos contigo para conocer tus planes de aprendizaje y especialización futuros. ");

    const areaDesarrollo=  prompt("que area de desarrollo has escogido en tu apredizaje: 1= Front-End, 2 = back-End" );
    let respuestaBuena = 0;

    while (respuestaBuena == 0)  {
    
        let respuestaTrimmed = parseInt(areaDesarrollo.trim());

        if  (isNaN(respuestaTrimmed) || respuestaTrimmed>2) {
            areaDesarrollo= prompt("La respuesta no es 1 o 2. Por favor responde si tu aprendizaje es 1=Front-End, 2=Back-End");

        }   else {
            respuestaBuena=1;
        }
    }  

    let  aprenderPrograma = "";

    if (areaDesarrollo == 1){
        aprenderPrograma= prompt("¿Quieres aprender React o VUe?");
    }   
        else {
            aprenderPrograma= prompt("¿Quieres aprender C# o Java?");   
    }

    const especializacion= prompt(`¿Te vas a especializar en ${areaDesarrollo ==1 ? "Front-End" : "Back-End"} = 1 o te vas a desarrollar como Fullstack = 2?`);
    let tecnologiaString = ""
    let tecnologiaArray = []
    let continuaCiclo = 1

    while (continuaCiclo == 1)  {

        tecnologiaString =  ""
        tecnologiaString = prompt("¿Hay alguna otra tecnología que te gustaría aprender?. Escríbela o das cancelar para terminar")

        if (tecnologiaString == "") {

             continuaCiclo = 0
        
        }   else {
                tecnologiaArray.push(tecnologiaString)                
            }
    } 

    alert("¡Hasta Pronto!")

    console.log(tecnologiaArray)

}

// ------------------------------------------------------- Cuarta Clase0*----------------------------------------------

function diaCuatro(){

    let maximo = 100 ;
    let minimo = 1;
    var tiradas = 4;
    var numeroEscogido = 0;
    var intentos= 0;
    var continueJuego = 1;
    var numeroAzar = parseInt(Math.floor(Math.random() * (maximo - minimo +1) + minimo));

    alert( `La cuestión es si puedes adivinar un número entre ${minimo} y ${maximo}, en máximo  4  intentos.`) ;  

    console.log(` Azar: ${numeroAzar}`);

    do{
        intentos = intentos + 1;              
        console.log(`INTENTOS:${intentos}`);

        if (intentos > 4){

            alert(`Has superado el número de intentos para adivinar el número ${numeroAzar}. Puedes iniciar de nuevo`)
            continueJuego = 0
            break 

        }   else{            
                numeroEscogido = Number(prompt(` Realiza tu intento ${intentos}.`));

                if (numeroEscogido == numeroAzar) {

                    alert(` ¡Felicitaciones! en ${intentos} ${intentos == 1 ? "intento" : "intentos"} has adivinado el número ${numeroAzar}`);
                    continueJuego = 0;
                
                } else{

                    alert(`El número ${numeroEscogido}  es ${numeroEscogido < numeroAzar ? "menor" : "mayor" } que el número secreto. Intenta nuevamente`);
                }
        }
      
    } while (continueJuego == 1)
  
}


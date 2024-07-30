const cadena1 = "Multiplo de 3";
const cadena2 = "Multiplo de 5";
let cadena3 = "Multiplo de 6";
let countNumbers = 0;

function calculateMultiples(cadena1, cadena2, cadena3) {
    for (var i = 1; i <= 121; i++) {
        if (i % 3 === 0 || i % 5 === 0 && i % 6 === 0) {
            console.log(cadena1 + " y " + cadena2 + ' y ' + cadena3);
        }
        else if (i % 3 === 0) {
            console.log(cadena1);
        }
        else if (i % 5 === 0) {
            console.log(cadena2);
        }
        else if (i % 6 ===0)  {
            console.log(cadena3);
        }
        else {
            console.log(i);
            countNumbers += 1;
        }
    }
}

calculateMultiples(cadena1, cadena2, cadena3);
console.log("Número de veces que se imprimio un numero: ", countNumbers);
//3. Recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %


let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34,
    2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43
];

let numeros2 = [55, 30];

function multiplos(y) {

    for (let i = 0; i < y.length; i++) {
        if ((y[i] % 3) == 0) {
            console.log(y[i] + ' Es multiplo de 3');
        }

    }
}

multiplos(numeros)
// multiplos(numeros2)

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] %3 == 0) {
//         console.log(numeros[i]);
//     }

// }
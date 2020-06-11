//  Función para validar el numero de tarjeta mediante el algoritmo de luhn
function luhn(cardNumber) {

    let individualNumbers = [];
    let duplicateNumbers = [];
    let finalArry = undefined;
    let sum = 0;
    let validCard = false;

    //  A traves del método split dividimos el numero de la  tarjeta(que es un string) en una matriz de cadenas
    //  mediante la separación de la cadena en sub cadenas

    let cardNumberSplit = cardNumber.split("");
    console.log(cardNumber);
    console.log(cardNumberSplit);


    if (cardNumber.length === 16) {
        // Creamos un for para poder iterar con cada una de las sub cadenas del array
        for (var i = cardNumberSplit.length - 1; i >= 0; i--) {
            if (i % 2 !== 0) {
                individualNumbers.push(cardNumberSplit[i]);// Usamos método push() para los elementos que cumplen con la condición  al final de un nuevo arreglo
                console.log("numeros posiscion1" + individualNumbers);
            } else {
                duplicateNumbers.push((cardNumberSplit[i] * 2).toString());
                console.log("numeros posicion2 multiplicados" + duplicateNumbers)
            }
        }

    }
    // El método join nos permite pasar un string a un array  y luego aplicamos el método split de nuevo 
    //De esta manera cada numero es un solo dígito y se convierte en array otra vez

    duplicateNumbers = duplicateNumbers.join("").split("");
    console.log("join" + duplicateNumbers.join(""))
    console.log("numeros convertidos en array " + duplicateNumbers)
    finalArry = duplicateNumbers.concat(individualNumbers);
    console.log("array para sumar" + finalArry)
    for (var j = 0; j < finalArry.length; j++) {
        sum += parseInt(finalArry[j]);
    }

    if (sum % 10 === 0) {
        validCard = true;
    }

    console.log(sum);
    return validCard;

}

//Enmascaramiento del numero de la tarjeta de credito
function mask(cardNumber) {
    let newNumber = cardNumber.replace(/\d(?=\d{4})/g, "*");
    return newNumber;
}
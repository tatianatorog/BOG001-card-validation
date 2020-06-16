import validator from './validator.js';


for (let i= 1; i<=12; i++){
    let monthOption = document.createElement('option') 
    monthOption.value= i;
    monthOption.innerText= i;
    let month = document.getElementById("month");
    month.appendChild(monthOption)

}

const yearActual =new Date().getFullYear();
for(let i= yearActual; i<= yearActual +10; i++){
    let yearOption = document.createElement('option') 
    yearOption.value= i;
    yearOption.innerText= i;
    let year = document.getElementById("year");
    year.appendChild(yearOption);
}




let result = document.getElementById("validar");
result.addEventListener("click", checkForm);

function checkForm() {
    let userCard = document.getElementById("creditCard");//*
    let userName = document.getElementById("userName");//*
    let userCcv = document.getElementById("input-code");//*
    let expressionNumber = /^([0-9])*$/;//*
    if (userCard.value === "" || userName.value === "" || userCcv.value === "") {
        alert(" Todos los campos son obligatorios");
        return false;
    } else if (userCard.value.length < 13 ) {
        alert("Revisa número tarjeta de crédito");
        return false;
    } else if (!expressionNumber.test(userCard.value)) {
        alert("Debes digitar números en el campo Tarjeta de credito");
        return false;
    } else if (!expressionNumber.test(userCcv.value) || userCcv.value.length < 3 || userCcv.value.length > 3) {
        alert("Revisa tu código de seguridad");
        return false;
        // }else if (!expressionNumber.test(month.value) || month.value <1 || month.value > 12) {
        // alert ("Ingresa un mes valido ");
        // return false
        // }else if (!expressionNumber.test(year.value) || year.value < 20 || year.value >30) {
        //   alert ("Ingresa un año valido ");
        //   return false
    } else {
        //LLamado a la función que enmascara el numero de tarjeta
        let maskNumber = validator.maskify(userCard.value);

        let container = document.getElementById("contenedor");
        container.style.display = "none";
        let answer = document.getElementById("answerContainer");
        answer.style.display = "block";

        //LLamado a la funcion que valida mediante el algoritmo de Luhn el numero de tarjeta
        let validNumber = validator.isValid(userCard.value);
        let esValid = "";
        if (validNumber === true) {
            esValid = "VALIDA !Gracias por confiar en nosotros¡";
        } else {
            esValid = "INVALIDA  ¡Intentalo de nuevo!";
        }
        //Imprime respuesta del servicio de validación
        answer.innerHTML = "<h2>" + userName.value.toUpperCase() + " TU TARJETA DE CRÉDITO " + " " + "" + maskNumber + " " + "<br>" + "ES" + " " + esValid;
    }

}

console.log(validator);
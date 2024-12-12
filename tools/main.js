//importamos helpers
import { suma} from "./helpers/suma.js";
import { resta } from "./helpers/resta.js"
import { multiplicacion } from "./helpers/multiplicacion.js"
import { division } from "./helpers/division.js"

//definimos body, header y main
const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");

//definimos el nombre del título
const title = document.createElement("h1");
title.innerHTML = "Calculadora 2.0";

//muestreo en pantalla
body.append(header);
body.append(main);
header.append(title);

//****************************** */
// formulario
const form = document.createElement("form");

//creamos primer input
const firstInput = document.createElement("input");
firstInput.type = "number";
firstInput.placeholder = "Primer valor";
//creamos segundo input
const secondInput = document.createElement("input");
secondInput.type = "number";
secondInput.placeholder = "Segundo valor";

//muestreo en pantalla
main.append(form)
form.append(firstInput, secondInput);

//separación y muestreo
const br = document.createElement("br")
form.appendChild(br)

//creamos botón de suma
const btnSuma = document.createElement("button");
btnSuma.innerHTML = "Sumar";
btnSuma.setAttribute("class", "btn")

//creamos botón de resta
const btnResta = document.createElement("button");
btnResta.innerHTML = "Restar";
btnResta.setAttribute("class", "btn")

//creamos botón de multiplicación
const btnMultiplicacion = document.createElement("button");
btnMultiplicacion.innerHTML = "Multiplicar"
btnMultiplicacion.setAttribute("class", "btn")

//creamos botón de división
const btnDivision = document.createElement("button");
btnDivision.innerHTML = "Dividir";
btnDivision.setAttribute("class", "btn")

//muestreo en pantalla
form.append(btnSuma, btnResta, btnMultiplicacion, btnDivision);

//resultado título y muestreo
const resultTitle = document.createElement("h2")
resultTitle.innerHTML = "Resultado";
body.append(resultTitle);

//resultado título
let result = document.createElement("p");
result.innerHTML = "0";


//****************************** */

//recojo los valores de los inputs
//los guardo en una variable y los retorno
const valoresInput = () => {
    const a = parseFloat(firstInput.value);
    const b = parseFloat(secondInput.value);
    return {a, b};
};

//al hacer click, llamo a la funcion que
//suma los valores de los inputs y le da los valores
btnSuma.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    const { a, b } = valoresInput();
    result.innerHTML = suma(a,b);
});

//al hacer click, llamo a la funcion que
//resta los valores de los inputs y le da los valores
btnResta.addEventListener("click", (evento) => {
    evento.preventDefault();

    const { a, b } = valoresInput();
    result.innerHTML = resta(a,b)
})

//al hacer click, llamo a la funcion que
//multiplica los valores de los inputs y le da los valores
btnMultiplicacion.addEventListener("click", (evento) => {
    evento.preventDefault();

    const { a, b } = valoresInput();
    result.innerHTML = multiplicacion(a,b);
})

//al hacer click, llamo a la funcion que
//divide los valores de los inputs y le da los valores
btnDivision.addEventListener("click", (evento) => { 
    evento.preventDefault();

    const { a, b } = valoresInput()
    result.innerHTML = division(a,b);
})

// muestreo de los resultados
body.append(result);
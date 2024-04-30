//1. User profile 

var nombre;
var edad;
var listaPeliculas;

nombre = prompt("ingresa tu nombre");
edad = prompt("ingresa tu edad");
listaPeliculas = prompt("ingresa tus 3 peliculas favoritas, separadas por una coma ");

function mostrar(){
    alert("Nombre: " + nombreUsuario + "\nEdad: " + edadUsuario + "\nPelículas favoritas: " + listaPeliculas);
}
mostrar();
console.log(listaPeliculas);

// 2 Highest number
var numeros = [];
for (let i = 1; i <= 10; i++) {
    let numeros = (prompt("Ingresa el número " + (i + 1) + ":"));
    numeros.push(numero);
}

var mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
alert("El número mayor es: " + mayor);

// 3 Alarm
var segundosAlarma = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));
var mensaje = prompt("Ingrese el mensaje a mostrar después de " + segundosAlarma + " segundos:");

function mostrarMensajeDespuesDe(segundos, mensaje) {
    var milisegundos = segundos * 1000;
        setTimeout(function() {
        alert(mensaje);
    }, milisegundos);
}
mostrarMensajeDespuesDe(segundosAlarma, mensaje);


// 4 Palindrome

const cleanString = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]/g,'');
}

const isPalindrome = (str) => {
    let cleanStr = cleanString(str);
  
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  let input = prompt("Enter a word or sentence:");
  
  if (isPalindrome(input)) {
    console.log("'" + input + "' is a palindrome.");
  } else {
    console.log("'" + input + "' is not a palindrome.");

// 5 Factorial

const promptForInteger = () => {
    let input = prompt("Enter a positive integer (n >= 1):");
    let num = parseInt(input);
  
    if (isNaN(num) || num < 1) {
      alert("Invalid input! Please enter a positive integer (n >= 1).");
      return promptForInteger();
    }
    return num;
  }
  
  const solveWithRecursion = (n) => {
    if (n === 1) {
      return 1;
    }1
    return n + solveWithRecursion(n - 1);
  }
  
  let n = promptForInteger();
  console.log("The result of the sum from 1 to", n, "is:", solveWithRecursion(n));

// 6 Flat array
function aplanarMatriz(matriz) {
    var aplanada = [];
    
    function procesar(elemento) {
        if (Array.isArray(elemento)) {
            elemento.forEach(procesar);
        } 
        else {
            aplanada.push(elemento);
        }
    }
    
    matriz.forEach(procesar);
    
    return aplanada;
}
var matrizAnidada = [[1, 2, [3, 4]], [5, [6, 7]], 8, [9, 10]];
var matrizAplanada = aplanarMatriz(matrizAnidada);
console.log("Matriz aplanada:", matrizAplanada);

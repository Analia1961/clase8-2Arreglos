// Arreglos (Ejercicios ONLINE) Viernes 13 de mayo de 2022
// Ejercicio 5 - Dos Arreglos

/*
• Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario.
• Al final debe imprimir los valores por consola.
*/

let arregloNumeros: number[] = new Array(3);
let arregloNombres: string[] = new Array(2);
let indice: number;

for (indice = 0; indice < 3; indice++) {
  arregloNumeros[indice] = Number(
    prompt("Ingrese número para la posición " + indice)
  );
}

//con nombreDelArreglo.length podemos saber la longitud del arreglo

for (indice = 0; indice < arregloNombres.length; indice++) {
  arregloNombres[indice] = prompt("Ingrese nombre para la posición " + indice);
}

for (indice = 0; indice < 3; indice++) {
  console.log(
    "El número en la posición " + indice + " es " + arregloNumeros[indice]
  );
}

for (indice = 0; indice < 2; indice++) {
  console.log(
    "El nombre en la posición " + indice + " es " + arregloNombres[indice]
  );
}

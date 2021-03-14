# Práctica 4: Array, tuplas y enumerados

## Objetivos
El objetivo en esta práctica radica en entender el funcionamiento de los arrays, las tuplas y los enumerados en typescript. Luego también usamos el Typedoc, mocha y chai.

## Tareas previas
Antes de realizar los ejercicios, tenemos que llevar a cabo una serie de tareas previas:

* Instalar y leer la documentación de ***Typedoc***,que es una herramienta para documentar nuestro código.
* Instalar y leer la documentación de ***Mocha*** y ***Chai***, que son herramientas para realizar pruebas a nuestro código. La primera es tipo TDD y la segunda BDD.

Enlaces:

[Typedoc](https://typedoc.org/)

[Mocha](https://mochajs.org/)

[Chai](https://www.chaijs.com/)


## Ejercicio 1: Decodificar resistencias

Código Typescript
```
function decodeResistor(resistence1 : string, resistence2 : string, resistence3 : string) {
  let array : string[] = [resistence1, resistence2, resistence3];
  let arrayAux : string = " ";
  let numberAux : string = " ";

  for (let i = 0; i <= array.length; i++) {
    if((array[i] == "negro") && (arrayAux.length != 3)) {
      arrayAux += "0"; 
    }
    else if ((array[i] == "marron") && (arrayAux.length != 3)) {
      arrayAux += "1";
    }
    else if ((array[i] == "rojo") && (arrayAux.length != 3)) {
      arrayAux += "2";
    }
    else if ((array[i] == "naranja") && (arrayAux.length != 3)) {
      arrayAux += "3";
    }
    else if ((array[i] == "amarillo") && (arrayAux.length != 3)) {
      arrayAux += "4";
    }
    else if ((array[i] == "verde") && (arrayAux.length != 3)) {
      arrayAux += "5";
    }
    else if ((array[i] == "azul") && (arrayAux.length != 3)) {
      arrayAux += "6";
    }
    else if ((array[i] == "violeta") && (arrayAux.length != 3)) {
      arrayAux += "7";
    }
    else if ((array[i] == "gris") && (arrayAux.length != 3)) {
      arrayAux += "8";
    }
    else if ((array[i] == "blanco") && (arrayAux.length != 3)) {
      arrayAux += "9";
    }
    else {
      return arrayAux;
    }
  }
  return arrayAux;

}

let test1Decode = decodeResistor("negro", "blanco", "amarillo");
console.log(`result: ${test1Decode}`);
```

Para este ejercicio nos hemos decantado por una sentencia for que recorre un vector de strings llamado ***array*** donde tiene dentro los tres nombres de las resistencias pasadas por parametro en la función. Luego una serie de if con el nombre de los colores y sus respectivos valores númericos. Hay que recalcar que aunque se pasen por parametro tres resistencias el programa solo va a hacer el calculo con las dos primeras, como dice el guión.

## Ejercicio 2: Palabras encadenadas en un array

Código TypeScript
```
function meshArray (textChain: string[]) { //recibe por parametros un array de strings
  let string_: string = " ";
 
  for (let j = 0; j < textChain.length; j++) {
    for (let i = j + 1; i < textChain.length; i++) {
      let string1 : string = textChain[j];
      let string2 : string = textChain[i];
      
      let aux: boolean = false;
      let iAux: number = 0; //index de cad 1
      let jAux: number = 0;//index cad 2
      while(iAux < string1.length) {
        if (string1[iAux] == string2[jAux]){
          aux = true;
          jAux++;
        }
        else {
          if (string1[iAux] == string2[0]) { //si dos letras son igules se comprueba de nuevo
            jAux = 1;
          }
          else {
          jAux = 0;
          aux = false;
          }
          
        }
        iAux++;
      }
      if (aux == true) {
        for (let k = 0; k < jAux; k++){
          string_ += string2[k];
        }
        console.log(string1, string2);
      }
    }
  }
  if(string_==" "){
    string_="Error al encadenar";
  }
  return string_;
}

let myArray: string[] = ["x", "allow", "lowering", "ringmaster", "terror"];
let test1MeshArray = meshArray(myArray);
console.log(`result: ${test1MeshArray}`);
```

En esta función llamada ***MeshArray***, le pasamos un vector de tipo string donde contiene las palabras que luego utilizaremos para comprobar si están encadenadas o no. Usamos dos sentencias for anidadas para saber la longitud de la palabra y la posición de cada letra de la palaba, para así operar mediante sus índices. Dentro usamos otro bucle while donde operamos hasta que la longitud de una palabra se acabe y es aquí donde comprobamos mediante sentencias if si las últimas letras de la primera palabra es igual al comienzo de la de su derecha.

## Ejercicio 3: Calcular la media y concatenar cadenas

Código TypeScript
```
function meanAndConcatenate (MyArray: any[]) {
  let string_:string = " ";
  let cont: number = 0;
  let suma: number = 0;

  for (let i = 0; i < MyArray.length; i++) {
    if (isNaN(MyArray[i])) {
      string_ += MyArray[i];
    }
    else {
      cont++;
      suma += MyArray[i];
    }
  }
  suma /= cont;
  let result: any[] = [suma, string_];
  return result;
}

let MyArray1: any[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
let test1MeanAndConcatenate = meanAndConcatenate(MyArray1);
console.log(`result: ${test1MeanAndConcatenate}`);
```

En esta funcion ***meanAndConcatenate*** le pasamos por parametro un array de tipo any ya que va a ser un vector que tendrá tanto elementos de tipo string como de tipo number. Con una sentencia for recorremos el vector para comprobar con la funcion ***isNaN***, si cada posición es un número. Luego el número lo guardamos en una variable para posteriormente hacer la media y por último retornamos otro array con la media de los números y una cadena de string con las letras.

## Ejercicio 4: Mover los ceros al final

Código TypeScript
```
function moveZeros (MyArray: number[]) {
  let numero : number[] = [];
  let cont: number = 0;

  for (let i = 0; i < MyArray.length; i++) {
    if (MyArray[i] != 0) {
      numero.push(MyArray[i]);
    }
    else {
      cont++;
    }
  }
  for (let i = 0; i < cont; i++){
    numero.push(0);
  }
  return numero;
}

let MyArray2: number[] = [1, 0, 1, 2, 0, 1, 3];
let test3 = moveZeros(MyArray2);
console.log(`result: ${test3}`);
``` 

En la función ***moveZeros***, le vamos a pasar por parametro un array con elementos de tipo número, lo recorremos con un bucle for y mientras el contenido del array no sea cero, hacemos un push de esa posición a otro array. Luego mediante otro bucle, ya sabiendo previamente el número de ceros que contenia el array que nos han pasado, hacemos un push de tantos ceros como haga falta.

## Ejercicio 5: Factoría de multiplicaciones




## Ejercicio 6: Puntos bi-dimensionales

Código TypeScript
```
type point = [number, number];
function sumar(puntoA: [number, number], puntoB: [number, number]){
let puntoC: point = puntoA;
puntoC[0] += puntoB[0];
puntoC[1] += puntoB[1];
return puntoC;
}

function restar(puntoA: [number, number], puntoB: [number, number]) {
  let puntoC: point = puntoA;
  puntoC[0] += puntoB[0];
  puntoC[1] += puntoB[1];
  return puntoC;
}

function multiplicar(puntoA: [number, number], num: number) {
  let puntoC: point = puntoA;
  puntoC[0] = puntoC[0] * num;
  puntoC[1] = puntoC[1] * num;
  return puntoC;
}

function euclidean(puntoA: [number, number], puntoB: [number, number]) {
  let distEuclidean: number = 0;
  distEuclidean = Math.sqrt((Math.pow((puntoA[1] - puntoA[0]), 2) + Math.pow((puntoB[1] - puntoB[0]), 2)));
  return distEuclidean;
}

let puntoA: point;
let puntoB: point;
let num = 5;
puntoA.push(1, 1);
puntoB.push(2, 2);
let test4 = sumar(puntoA, puntoB); 
console.log(`result: ${test4}`);

let test5 = restar(puntoA, puntoB); 
console.log(`result: ${test5}`);

let test6 = multiplicar(puntoA, num); 
console.log(`result: ${test6}`);

let test7 = euclidean(puntoA, puntoB); 
console.log(`result: ${test7}`);
``` 

En este ejercicio creamos un tipo de dato llamado point que en esencia será una tupla de tipo número. Para realizar las operaciones que nos pide el guión, hacemos varias funciones donde le pasamos por parametro dos puntos de tipo point, tales como:

* Sumar: Sumamos la coordenada del puntoA con el puntoB y guardamos el resultado en una variable de tipo point llamada puntoC.
* Restar: Restamos las coordenadas de ambos puntos y lo guardamos en otra variable llamada puntoC.
* Multiplicar una coordenada por un número: Cada coordenada del punto que pasamos por parametro lo multiplicamos por un número.
* Distancia Euclidea: Usamos la fórmula para obtener la distancia euclidea mediante las funciones ***math.sqrt***, que nos hace la raíz cuadrada y con la funcion ***math.pow***, que nos calcula la potencia.

[Fórmula distancia Euclidea](https://es.wikipedia.org/wiki/Distancia_euclidiana)


## Ejercicio 7: Puntos n-dimensionales

Código TypeScript
```
type pointN = [number, number][];

function sumarN(puntoA: [number, number][], puntoB: [number, number][]) {
  let puntoC: pointN = puntoA;

  if(puntoA.length == puntoB.length) {  
    for (let i = 0; i < puntoA.length; i++) {
      for (let j = 0; i < puntoA.length; j++) {
        puntoC[i][j] += puntoB[i][j];
      }
    }
  }
  else {
    console.log("Las dimensiones de los puntos no son la misma");
  }
  return puntoC;
}

function restarN(puntoA: [number, number][], puntoB: [number, number][]) {
  let puntoC: pointN = puntoA;

  if(puntoA.length == puntoB.length) {  
    for (let i = 0; i < puntoA.length; i++) {
      for (let j = 0; i < puntoA.length; j++) {
        puntoC[i][j] -= puntoB[i][j];
      }
    }
  }
  else {
    console.log("Las dimensiones de los puntos no son la misma");
  }
  return puntoC;
}

function multiplicarN(puntoA: [number, number][], num: number) {
  let puntoC: pointN = puntoA;

    for (let i = 0; i < puntoA.length; i++) {
      for (let j = 0; i < puntoA.length; j++) {
        puntoC[i][j] *= num;
      }
    }
  return puntoC;
}

function euclideanN(puntoA: [number, number][], puntoB: [number, number][]) {
  let distEuclidean: number = 0;

  if(puntoA.length == puntoB.length) {  
    for (let i = 0; i < puntoA.length; i++) {
      for (let j = 0; i < puntoA.length; j++) {
        distEuclidean += Math.sqrt((Math.pow((puntoA[i][j] - puntoB[i][j]), 2)));
      }
    }
  }
  else {
    console.log("Las dimensiones de los puntos no son la misma");
  }
  return distEuclidean;
}

```

En esencia es lo mismo que lo explicado anteriormente en el ejercicio 6, sin embargo esta vez utilizando un tipo de dato llamado pointN que es un array de tuplas de tipo número. Para ello lo que vamos a hacer en las distintas funciones es recorrrer el vector de los puntos que nos pasan por parametros, previamente cerciorandonos que son de la misma dimension, para luego realizar las operaciones suma, resta, multiplicación y distancia euclidea del mismo modo que el ejercicio anterior.

## Ejercicio 8: El agente






















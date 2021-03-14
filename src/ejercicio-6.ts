type point = [number, number];
function sumar(puntoA: point, puntoB: point){
let puntoC: point = puntoA;
puntoC[0] += puntoB[0];
puntoC[1] += puntoB[1];
return puntoC;
}

function restar(puntoA: point, puntoB: point) {
  let puntoC: point = puntoA;
  puntoC[0] += puntoB[0];
  puntoC[1] += puntoB[1];
  return puntoC;
}

function multiplicar(puntoA: point, num: number) {
  let puntoC: point = puntoA;
  puntoC[0] = puntoC[0] * num;
  puntoC[1] = puntoC[1] * num;
  return puntoC;
}

function euclidean(puntoA: point, puntoB: point) {
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







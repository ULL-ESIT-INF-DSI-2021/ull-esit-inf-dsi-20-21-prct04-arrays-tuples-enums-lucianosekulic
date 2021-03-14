
type punto = [number, number];

function agent(x: number, y: number, puntoA: punto, puntoB: punto) {
  let arrayFinal: string = " ";
  let numX: number = x;
  let numY: number = y;

  while(puntoA[0] != puntoB[0] && puntoA[1] != puntoB[1]) {
    if(puntoA[numY] < puntoB[numY]) {
      arrayFinal += "norte ";
      puntoA[numY]++;
    }
    else if(puntoA[numY] > puntoB[numY]) {
      arrayFinal += "sur ";
      puntoA[numY]--;
    }
    else if(puntoA[numX] < puntoB[numX]) {
      arrayFinal += "este ";
      puntoA[numX]++;
    }
    else if(puntoA[numX] > puntoB[numX]) {
      arrayFinal += "oeste ";
      puntoA[numX]--;
    }
  }
  return arrayFinal;
}

let puntoInicial: punto = [1, 3];
let puntoFinal: punto = [3, 5];
let x: number;
let y: number;
let test8 = agent(x, y, puntoInicial, puntoFinal);
console.log(`result: ${test8}`);
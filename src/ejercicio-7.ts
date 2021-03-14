type pointN = [number, number][];

function sumarN(puntoA: pointN, puntoB: pointN) {
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

function restarN(puntoA: pointN, puntoB: pointN) {
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

function multiplicarN(puntoA: pointN, num: number) {
  let puntoC: pointN = puntoA;

    for (let i = 0; i < puntoA.length; i++) {
      for (let j = 0; i < puntoA.length; j++) {
        puntoC[i][j] *= num;
      }
    }
  return puntoC;
}

function euclideanN(puntoA: pointN, puntoB: pointN) {
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
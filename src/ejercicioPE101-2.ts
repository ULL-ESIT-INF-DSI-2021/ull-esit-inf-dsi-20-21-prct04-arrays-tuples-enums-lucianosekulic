
type complex = [number, string];
function numerosComplejosSuma(complex1: [number, string], complex2: [number, string]) {
  let auxComplex: complex;
  for(let i = 0; i <= 1; i++) {
    auxComplex[i] = complex1[0] + complex2[0];
    for(let j = 0; j < 1; j++) {
    auxComplex[i] = complex1[0][0] + complex2[0][0];
    }
  }
  return auxComplex;

}

function numerosComplejosResta(complex1: [number, string], complex2: [number, string]) {
  let auxComplex: complex;
  for(let i = 0; i <= 1; i++) {
    auxComplex[i] = complex1[0] - complex2[0];
    for(let j = 0; j < 1; j++) {
    auxComplex[i] = complex1[0][0] - complex2[0][0];
    }
  }
  return auxComplex;
}


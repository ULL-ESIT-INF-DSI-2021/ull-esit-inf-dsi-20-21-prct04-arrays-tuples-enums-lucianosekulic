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
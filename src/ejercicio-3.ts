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
function meanAndConcatenate(MyArray) {
    let string_ = " ";
    let cont = 0;
    let suma = 0;
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
    let result = [suma, string_];
    return result;
}
let MyArray1 = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
let test1MeanAndConcatenate = meanAndConcatenate(MyArray1);
console.log(`result: ${test1MeanAndConcatenate}`);

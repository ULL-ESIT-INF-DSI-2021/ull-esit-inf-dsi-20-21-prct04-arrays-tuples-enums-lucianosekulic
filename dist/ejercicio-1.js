function decodeResistor(resistence1, resistence2, resistence3) {
    let array = [resistence1, resistence2, resistence3];
    let arrayAux = " ";
    let numberAux = " ";
    for (let i = 0; i <= array.length; i++) {
        if ((array[i] == "negro") && (arrayAux.length != 3)) {
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
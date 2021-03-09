function decodeResistor(resistence1, resistence2, resistence3) {
    var array = [resistence1, resistence2, resistence3];
    var arrayAux = [];
    var numberAux = " ";
    for (var i = 0; i <= array.length; i++) {
        if ((array[i] == "negro") && (arrayAux.length != 3)) {
            arrayAux[i] += 0;
        }
        else if ((array[i] == "marron") && (arrayAux.length != 3)) {
            arrayAux[i] += 1;
        }
        else if ((array[i] == "rojo") && (arrayAux.length != 3)) {
            arrayAux[i] += 2;
        }
        else if ((array[i] == "naranja") && (arrayAux.length != 3)) {
            arrayAux[i] += 3;
        }
        else if ((array[i] == "amarillo") && (arrayAux.length != 3)) {
            arrayAux[i] += 4;
        }
        else if ((array[i] == "verde") && (arrayAux.length != 3)) {
            arrayAux[i] += 5;
        }
        else if ((array[i] == "azul") && (arrayAux.length != 3)) {
            arrayAux[i] += 6;
        }
        else if ((array[i] == "violeta") && (arrayAux.length != 3)) {
            arrayAux[i] += 7;
        }
        else if ((array[i] == "gris") && (arrayAux.length != 3)) {
            arrayAux[i] += 8;
        }
        else if ((array[i] == "blanco") && (arrayAux.length != 3)) {
            arrayAux[i] += 9;
        }
        else {
            return arrayAux;
        }
    }
    return arrayAux;
}
var test1Decode = decodeResistor("negro", "blanco", "amarillo");
console.log("result: " + test1Decode);

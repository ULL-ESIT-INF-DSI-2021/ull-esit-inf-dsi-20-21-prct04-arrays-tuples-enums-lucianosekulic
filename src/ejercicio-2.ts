function meshArray (textChain: string[]) { //recibe por parametros un array de strings
  let stringAux : string[] = [];
  let string_: string = " ";
  /*for (let i = 0; i < textChain.length; i++) { ///metemos las paalbras en un array
    arrayAux[i] = textChain[i];
  }
*/
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


function encodeMessage(message: string){
  let auxString: string = " ";
  let reverseMessage: string = "zyxwvutsrqponmlkjihgfedcba"
  for(let i = 0; i < message.length; i++) {
    for(let j = 0; j < reverseMessage.length; j++) {  
      if(message.charAt(i) == "a") {
        auxString += "z";
      }
      else if(message.charAt(i) == "b") {
        auxString += "y";
      }
      else if(message.charAt(i) == "c") {
        auxString += "x";
      }
      else if(message.charAt(i) == "d") {
        auxString += "w";
      }
      else if(message.charAt(i) == "e") {
        auxString += "v";
      }
      else if(message.charAt(i) == "f") {
        auxString += "u";
      }
      else if(message.charAt(i) == "g") {
        auxString += "t";
      }
      else if(message.charAt(i) == "h") {
        auxString += "s";
      }
      else if(message.charAt(i) == "i") {
        auxString += "r";
      }
      else if(message.charAt(i) == "j") {
        auxString += "q";
      }
      else if(message.charAt(i) == "k") {
        auxString += "p";
      }
      else if(message.charAt(i) == "l") {
        auxString += "o";
      }
      else if(message.charAt(i) == "m") {
        auxString += "n";
      }
      else if(message.charAt(i) == "n") {
        auxString += "m";
      }
      else if(message.charAt(i) == "o") {
        auxString += "l";
      }
      else if(message.charAt(i) == "p") {
        auxString += "k";
      }
      else if(message.charAt(i) == "q") {
        auxString += "j";
      }
      else if(message.charAt(i) == "r") {
        auxString += "i";
      }
      else if(message.charAt(i) == "s") {
        auxString += "h";
      }
      else if(message.charAt(i) == "t") {
        auxString += "g";
      }
      else if(message.charAt(i) == "u") {
        auxString += "f";
      }
      else if(message.charAt(i) == "v") {
        auxString += "e";
      }
      else if(message.charAt(i) == "x") {
        auxString += "d";
      }
      else if(message.charAt(i) == "w") {
        auxString += "c";
      }
      else if(message.charAt(i) == "y") {
        auxString += "b";
      }
      else if(message.charAt(i) == "z") {
        auxString += "a";
      }
      else {
        return undefined;
        console.log("introduzca correctamente los caracteres");
      }
    }
  }
  return auxString;
}
let encode: string = encodeMessage("hola"); 
//while(encode.length == 5) {
  let test1PE = encode.slice(0,4);
  console.log(`result: ${test1PE}`);
//}
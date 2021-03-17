import "mocha";
import { expect } from "chai";
import { decodeResistor } from "../src/prueba";

describe("Pruebas de array", () => {
  it("Prueba de las resistencias II", () => {
    let array = [1, 2, 0, 0, 4, 5, 7];
    let resultado = [1, 2, 4, 5, 7, 0, 0];
    expect(decodeResistor("negro", "blanco", "amarillo")).to.be.equal("094");
  });
});

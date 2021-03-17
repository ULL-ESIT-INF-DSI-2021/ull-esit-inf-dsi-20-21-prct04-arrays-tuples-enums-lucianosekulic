import "mocha";
import { expect } from "chai";
import { moveZeros } from "../src/ejercicio-4";

describe("Pruebas de array", () => {
  it("Primera prueba", () => {
    let array = [1, 2, 0, 0, 4, 5, 7];
    let resultado = [1, 2, 4, 5, 7, 0, 0];
    expect(moveZeros(array)).to.be.deep.equal(resultado);
  });
});

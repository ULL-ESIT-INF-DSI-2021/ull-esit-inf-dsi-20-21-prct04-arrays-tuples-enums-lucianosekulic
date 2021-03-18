import "mocha";
import { expect } from "chai";

import { decodeResistor } from "../src/ejercicio-1";
import { add } from "../src/ejercicio-1";

describe("Prueba de las resistencias", () => {
  it("Funciona", () => {
    const valores: string[] = ["negro", "blanco", "amarillo"];
    const resultado: string = "094";
    expect(decodeResistor("negro", "blanco", "amarillo")).to.be.equal(
      resultado
    );
  });
});

describe("Prueba de las sumas", () => {
  it("Funciona", () => {
    expect(add(1, 2)).to.be.equal(3);
  });
});

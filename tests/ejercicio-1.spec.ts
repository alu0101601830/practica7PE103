import {ImperialLength} from "../src/ejercicio1PE103_p7/ImperialLength";
import {ImperialMass} from "../src/ejercicio1PE103_p7/ImperialMass";



import { expect } from "chai";
import "mocha";

describe("Ejercicio 1", () => {
  describe("Imperial Length", () => {
    it("probamos la clase y sus funciones", () => {
      let prueba = new ImperialLength(17)
      expect(prueba.get_pulgadas()).to.be.equal(17)
      prueba.set_pulgadas(24)
      expect(prueba.get_pulgadas()).to.be.equal(24)

      prueba.set_pies(25)
      expect(prueba.get_pies()).to.be.equal(25)
      expect(prueba.get_pulgadas()).to.be.equal(300)

      prueba.set_yardas(45)
      expect(prueba.get_yardas()).to.be.equal(45)
      expect(prueba.get_pulgadas()).to.be.equal(1620)

      prueba.set_millas(3)
      expect(prueba.get_millas()).to.be.equal(3)
      expect(prueba.get_pulgadas()).to.be.equal(190080)
    });
  });
  /*describe("Imperial Mass", () => {
    it("probamos la clase y sus funciones", () => {
      let prueba = new ImperialMass(17)
      expect(prueba.get_pulgadas()).to.be.equal(17)
      prueba.set_pulgadas(24)
      expect(prueba.get_pulgadas()).to.be.equal(24)

      prueba.set_pies(25)
      expect(prueba.get_pies()).to.be.equal(25)
      expect(prueba.get_pulgadas()).to.be.equal(300)

      prueba.set_yardas(45)
      expect(prueba.get_yardas()).to.be.equal(45)
      expect(prueba.get_pulgadas()).to.be.equal(1620)

      prueba.set_millas(3)
      expect(prueba.get_millas()).to.be.equal(3)
      expect(prueba.get_pulgadas()).to.be.equal(190080)
    });
  });*/
});


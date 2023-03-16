import {ImperialLength} from "../src/ejercicio1PE103_p7/ImperialLength";
import {MetricLength} from "../src/ejercicio2PE103_p7/MetricLength";



import { expect } from "chai";
import "mocha";

describe("Ejercicio 2", () => {
  describe("Metric Length", () => {
    it("constructor y centimetros", () => {
      let prueba = new MetricLength(1500)
      expect(prueba.get_centimetros()).to.be.equal(1500)
      prueba.set_centimetros(1340)
      expect(prueba.get_centimetros()).to.be.equal(1340)
    });
    it("metros", () => {
      let prueba = new MetricLength(1500)
      prueba.set_metros(2)
      expect(prueba.get_metros()).to.be.equal(2)
      expect(prueba.get_centimetros()).to.be.equal(200)
    });
    it("kilometros", () => {
      let prueba = new MetricLength(1500)
      prueba.set_kilometros(1)
      expect(prueba.get_kilometros()).to.be.equal(1)
      expect(prueba.get_centimetros()).to.be.equal(100000)
    });
    it("pulgadas", () => {
      let prueba = new MetricLength(1500)
      prueba.set_pulgadas(12)
      expect(prueba.get_pulgadas()).to.be.equal(12)
      expect(prueba.get_centimetros()).to.be.equal(30.48)
    });
    it("pies", () => {
      let prueba = new MetricLength(1500)
      prueba.set_pies(14)
      expect(prueba.get_pies()).to.be.equal(14)
      expect(prueba.get_centimetros()).to.be.equal(426.72)
    });
    it("yardas", () => {
      let prueba = new MetricLength(1500)
      prueba.set_yardas(14)
      expect(prueba.get_yardas()).to.be.equal(13.999999999999998)
      expect(prueba.get_centimetros()).to.be.equal(1280.1599999999999)
    });
    it("millas", () => {
      let prueba = new MetricLength(1500)
      prueba.set_millas(12)
      expect(prueba.get_millas()).to.be.equal(11.999970174182772)
      expect(prueba.get_centimetros()).to.be.equal(1931208)
    });
  });
});


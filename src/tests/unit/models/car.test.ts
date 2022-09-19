import chai from "chai";
import * as sinon from "sinon";
import { Model } from "mongoose";
import Car from "../../../models/Car";
import { ICar, carSchema } from "../../../interfaces/ICar";
import { errId } from "../../../models/mongoModel";
import { carsMock, validWithIdCar } from "../mocks/carMocks";

describe('Car model', () =>{
  const carModel = new Car();
  beforeEach(() => sinon.restore())
  describe('create method:', () => {
    it('should return a object in case of success', async () => {
      sinon.stub(Model, 'create').resolves(validWithIdCar);

      const instance = await carModel.create(validWithIdCar)
      chai.expect(instance).to.be.deep.equal(validWithIdCar)
    })
  })

  describe('read method:', () => {
    it('should return an array of objects in caso of success', async () => {
      sinon.stub(Model, 'find').resolves(carsMock);

      const instances = await carModel.read();
      chai.expect(instances).to.be.deep.equal(carsMock);
    })
  })

  describe('readOne method:', () => {
    it('should return a object in case of success', async () => {
      sinon.stub(Model, 'findOne').resolves(validWithIdCar);

      const instance = await carModel.readOne('293062E1E19782BE392F420C');
      chai.expect(instance).to.be.deep.equal(validWithIdCar);
    })
  })
  
})



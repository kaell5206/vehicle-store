import chai from "chai";
import * as sinon from "sinon";
import Car from "../../../models/Car";
import { ICar, carSchema } from "../../../interfaces/ICar";
import { errId } from "../../../models/mongoModel";
import { carsMock, validWithIdCar } from "../mocks/carMocks";
import CarService from "../../../services/Car";

describe('Car Service', () => {
  const model = new Car();
  const service = new CarService(model);
  beforeEach(() => sinon.restore())
  describe('create method', () => {
    it('should return a new objected in case of success', async () => {
      sinon.stub(model, 'create').resolves(validWithIdCar);

      const instance = await service.add(validWithIdCar);
      chai.expect(instance).to.be.deep.equal(validWithIdCar);
    })
  })

  describe('read method', () => {
    it('should return an array of objects in case of success', async () => {
      sinon.stub(model, 'read').resolves(carsMock);

      const instances = await service.findAll();
      chai.expect(instances).to.be.deep.equal(carsMock);
    })
  })

  describe('readOne method:', () => {
    it('should return a object in case of success', async () => {
      sinon.stub(model, 'readOne').resolves(validWithIdCar);

      const instance = await service.findOne('293062E1E19782BE392F420C');
      chai.expect(instance).to.be.deep.equal(validWithIdCar);
    })
  })
})
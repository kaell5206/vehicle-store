import chai from "chai";
import * as sinon from "sinon";
import Car from "../../../models/Car";
import { ICar, carSchema } from "../../../interfaces/ICar";
import { errId } from "../../../models/mongoModel";
import { carsMock, validWithIdCar } from "../mocks/carMocks";
import CarService from "../../../services/Car";
import CarController from "../../../controllers/Car";
import { Request, Response } from "express";

describe('Car Controller', () => {
  const model = new Car();
  const service = new CarService(model);
  const controller = new CarController(service);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => sinon.restore());

  describe('add method', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
    it('should return the correct status(201) code and body', async () => {
      sinon.stub(service, 'add').resolves(validWithIdCar);

      await controller.add(req,res)

      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub

      chai.expect(status.calledWith(201)).to.be.true;
      chai.expect(json.calledWith(validWithIdCar)).to.be.true;
    })
  })

  describe('findAll method', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
    it('should return the correct status(200) and body', async () => {
      sinon.stub(service, 'findAll').resolves(carsMock);

      await controller.findAll(req,res);

      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      chai.expect(status.calledWith(200)).to.be.true;
      chai.expect(json.calledWith(carsMock)).to.be.true;
    })
  })

  describe('findOne method', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
    it('should return the correct status(200) and body', async () => {
      sinon.stub(service, 'findOne').resolves(validWithIdCar);

      req.params = { id: validWithIdCar._id }

      await controller.findOne(req,res);

      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      chai.expect(status.calledWith(200)).to.be.true;
      chai.expect(json.calledWith(validWithIdCar)).to.be.true;
    })
  })
})
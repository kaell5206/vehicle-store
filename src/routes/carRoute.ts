import { Router } from 'express';
import Car from '../models/Car';
import CarService from '../services/Car';
import CarController from '../controllers/Car';

const carRoute = Router();

const model = new Car();
const service = new CarService(model);
const controller = new CarController(service);

carRoute.route('/')
  .get((req, res) => controller.findAll(req, res))
  .post((req, res) => controller.add(req, res));

export default carRoute;
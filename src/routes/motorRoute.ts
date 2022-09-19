import { Router } from 'express';
import Motor from '../models/Motor';
import MotorService from '../services/Motor';
import MotorController from '../controllers/Motor';

const motorRoute = Router();

const model = new Motor();
const service = new MotorService(model);
const controller = new MotorController(service);

motorRoute.route('/')
  .get((req, res) => controller.findAll(req, res))
  .post((req, res) => controller.add(req, res));

motorRoute.route('/:id')
  .get((req, res) => controller.findOne(req, res))
  .put((req, res) => controller.updateOne(req, res))
  .delete((req, res) => controller.deleteOne(req, res));

export default motorRoute;
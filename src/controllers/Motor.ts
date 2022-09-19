import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IMotorcycle as IMotor } from '../interfaces/IMotorcycle';

export default class MotorController {
  protected _motor: IService<IMotor>;

  constructor(service: IService<IMotor>) {
    this._motor = service;
  }
  public async add(req: Request & { body: IMotor }, res: Response<IMotor>): Promise<void> {
    const create = await this._motor.add(req.body);
    res.status(201).json(create);
  }

  public async findAll(_req: Request, res: Response): Promise<void> {
    const get = await this._motor.findAll();
    res.status(200).json(get);
  }

  public async findOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const get = await this._motor.findOne(id);
    res.status(200).json(get);
  }

  public async updateOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const update = await this._motor.updateOne(id, req.body);
    res.status(200).json(update);
  }

  public async deleteOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const del = await this._motor.deleteOne(id);
    res.status(204).json(del);
  } 
}
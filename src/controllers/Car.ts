import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  protected _car: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._car = service;
  }

  public async add(req: Request & { body: ICar }, res: Response<ICar>): Promise<void> {
    const create = await this._car.add(req.body);
    res.status(201).json(create);
  }

  public async findAll(_req: Request, res: Response): Promise<void> {
    const get = await this._car.findAll();
    res.status(200).json(get);
  }

  public async findOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const get = await this._car.findOne(id);
    res.status(200).json(get);
  }

  public async updateOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const update = await this._car.updateOne(id, req.body);
    res.status(200).json(update);
  }

  public async deleteOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const del = await this._car.deleteOne(id);
    res.status(204).json(del);
  } 
}
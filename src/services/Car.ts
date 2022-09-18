import IService from '../interfaces/IService';
import { ICar, carSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import Errors from '../Errors/Errors';

const errMsg = 'Object not found';

export default class CarService implements IService<ICar> {
  protected _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async findAll(): Promise<ICar[]> {
    const get = await this._car.read();
    return get;
  }

  public async findOne(_id: string): Promise<ICar> {
    const get = await this._car.readOne(_id);
    if (!get) throw new Errors(errMsg, 404);
    return get;
  }

  public async add(obj: ICar): Promise<ICar> {
    const validate = carSchema.safeParse(obj);
    if (!validate.success) throw validate.error;
    const add = await this._car.create(obj);
    return add;
  }

  public async updateOne(_id: string, obj: ICar): Promise<ICar> {
    const validate = carSchema.safeParse(obj);
    if (!validate.success) throw validate.error;
    const update = await this._car.update(_id, obj);
    if (!update) throw new Errors(errMsg, 404);
    return update;
  }

  public async deleteOne(_id: string): Promise<ICar | null> {
    const find = await this._car.readOne(_id);
    if (!find) throw new Errors(errMsg, 404);
    const del = await this._car.delete(_id);
    return del;
  }
}
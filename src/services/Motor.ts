import { IMotorcycle, motoSchema } from '../interfaces/IMotorcycle';
import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import Errors from '../Errors/Errors';

const errMsg = 'Object not found';

export default class MotorService implements IService<IMotorcycle> {
  protected _motor: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motor = model;
  }

  public async add(obj: IMotorcycle): Promise<IMotorcycle> {
    const validate = motoSchema.safeParse(obj);
    if (!validate.success) throw validate.error;
    const add = await this._motor.create(obj);
    return add;
  }

  public async findAll(): Promise<IMotorcycle[]> {
    const get = await this._motor.read();
    return get;
  }

  public async findOne(_id: string): Promise<IMotorcycle> {
    const get = await this._motor.readOne(_id);
    if (!get) throw new Errors(errMsg, 404);
    return get;
  }

  public async updateOne(_id: string, obj: IMotorcycle): Promise<IMotorcycle> {
    const validate = motoSchema.safeParse(obj);
    if (!validate.success) throw validate.error;
    const update = await this._motor.update(_id, obj);
    if (!update) throw new Errors(errMsg, 404);
    return update;
  }

  public async deleteOne(_id: string): Promise<IMotorcycle | null> {
    const find = await this._motor.readOne(_id);
    if (!find) throw new Errors(errMsg, 404);
    const del = await this._motor.delete(_id);
    return del;
  }
}

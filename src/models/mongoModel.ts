import { Model, isValidObjectId, UpdateQuery } from 'mongoose';
import Errors from '../Errors/Errors';
import { IModel } from '../interfaces/IModel';

export const errId = 'Id must have 24 hexadecimal characters';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;
  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    const add = await this._model.create({ ...obj });
    return add;
  }

  public async read(): Promise<T[]> {
    const find = await this._model.find();
    return find;
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Errors(errId, 400);
    const one = await this._model.findById({ _id });
    return one;
  }

  public async update(_id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Errors(errId, 400);
    const one = await this._model
      .findByIdAndUpdate(_id, { ...obj } as UpdateQuery<T>, { new: true });
    return one;
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Errors(errId, 400);
    const one = await this._model.findByIdAndDelete(_id);
    return one;
  }
}

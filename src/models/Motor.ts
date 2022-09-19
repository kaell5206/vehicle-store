import { model as mongooseModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './mongoModel';

export const motoSchema = new Schema({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

export default class Motor extends MongoModel<IMotorcycle> {
  constructor(model = mongooseModel('Motorcycles', motoSchema)) {
    super(model);
  }
}
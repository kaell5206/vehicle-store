import { model as mongooseModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './mongoModel';

const carSchema = new Schema<ICar>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

export default class Car extends MongoModel<ICar> {
  constructor(model = mongooseModel('Cars', carSchema)) {
    super(model);
  }
}
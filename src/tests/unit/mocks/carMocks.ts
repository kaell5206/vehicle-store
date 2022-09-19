import { ICar } from "../../../interfaces/ICar";

export const validCar: ICar = {
  model: 'BMW',
  year: 1980,
  color: 'white',
  buyValue: 12000,
  seatsQty: 4,
  doorsQty: 4
};

export const validWithIdCar: ICar & { _id: string } = {
  _id: '293062E1E19782BE392F420C',
  model: 'BMW',
  year: 1980,
  color: 'white',
  buyValue: 12000,
  seatsQty: 4,
  doorsQty: 4
};

export const updatedCar: ICar & { _id: string } = {
  _id: '293062E1E19782BE392F420C',
  model: 'BMW',
  year: 1982,
  color: 'black',
  buyValue: 13000,
  seatsQty: 4,
  doorsQty: 4
};


export const carsMock = [
  {
    _id: '293062E1E19782BE392F420C',
    model: 'BMW',
    year: 1982,
    color: 'white',
    buyValue: 12000,
    seatsQty: 4,
    doorsQty: 4
  },
  {
    _id: 'B4596214053D7A9B8823E007',
    model: 'WMB',
    year: 1983,
    color: 'black',
    buyValue: 13000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: 'A69E6012803041F710EC451A',
    model: 'BWM',
    year: 1988,
    color: 'purple',
    buyValue: 14000,
    seatsQty: 2,
    doorsQty: 2
  }
]

export default interface IService<T> {
  add(obj: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(_id: string): Promise<T>;
  updateOne(_id: string, obj: T): Promise<T>
  deleteOne(_id: string): Promise<T | null>
}
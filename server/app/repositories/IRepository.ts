export interface IRepository<T> {
  getAll<T> (): Promise<T[]>;
  getById<T> (id: string): Promise<T>;
  save<T> (entity: T): Promise<T>;
  update<T> (id: string, entity: T): Promise<T>;
  delete<T> (id: string): Promise<T>;
}
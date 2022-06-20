import { IDTO } from "@/http/DTO/IDTO";

export interface IRepository<T> {
  getAll<T> (): Promise<T[]>;
  getById<T> (id: string): Promise<T>;
  save<T extends IDTO<any>> (entity: T): Promise<T>;
  update<T extends IDTO<any>> (id: string, entity: T): Promise<T>;
  delete<T> (id: string): Promise<T>;
}
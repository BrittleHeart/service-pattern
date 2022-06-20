import { IUser } from "@/http/models/IUser";
import { ObjectId } from "mongoose";

export interface IRepository<T> {
  getAll<T>(): Promise<T[]>;
  getById<T>(id: string): Promise<T & { _id: ObjectId }>;
  save<T>(entity: T): Promise<T>;
  update<T>(id: string, entity: T): Promise<T>;
  delete<T>(id: string): Promise<T>;
}
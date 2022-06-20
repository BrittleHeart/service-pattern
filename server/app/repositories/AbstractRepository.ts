import { IUser } from "@/http/models/IUser";
import { IRepository } from "@/repositories/IRepository";
import { injectable } from "inversify";
import { ObjectId } from "mongoose";

@injectable()
export default abstract class AbstractRepository implements IRepository<any> {
  /**
   * Get all entities
   * @returns {Promise<T[]>}
   */
  abstract getAll<T>(): Promise<T[]>;

  /**
   * Get entity by id
   * @param {ObjectId} id
   * @returns {Promise<IUser & {_id: ObjectId}>}
   */
  abstract getById<T>(id: string): Promise<T & { _id: ObjectId }>;

  /**
   * Save entity
   * @param {T extends IDTO<any>} entity
   * @returns {Promise<T>}
   */
  abstract save<T>(entity: T): Promise<T>;

  /**
   * Update entity
   * @param {string} id
   * @param {T extends DTO<any>} entity
   * @returns {Promise<T>}
   */
  abstract update<T>(id: string, entity: T): Promise<T>;

  /**
   * Delete entity
   * @param {string} id
   * @returns {Promise<T>}
   */
  abstract delete<T>(id: string): Promise<T>;
}
import { IDTO } from "@/http/DTO/IDTO";
import { IRepository } from "@/repositories/IRepository";

export default abstract class AbstractRepository implements IRepository<any> {
  /**
   * Get all entities
   * @returns {Promise<T[]>}
   */
  abstract getAll<T>(): Promise<T[]>;

  /**
   * Get entity by id
   * @param {string} id 
   * @returns {Promise<T>}
   */
  abstract getById<T>(id: string): Promise<T>
  
  /**
   * Save entity
   * @param {T extends IDTO<any>} entity 
   * @returns {Promise<T>}
   */
  abstract save<T>(entity: T): Promise<T>

  /**
   * Update entity
   * @param {string} id 
   * @param {T extends DTO<any>} entity 
   * @returns {Promise<T>}
   */
  abstract update<T>(id: string, entity: T): Promise<T>

  /**
   * Delete entity
   * @param {string} id 
   * @returns {Promise<T>}
   */
  abstract delete<T>(id: string): Promise<T>
}
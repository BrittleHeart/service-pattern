import { IDTO } from "@/http/DTO/IDTO";
import { IRepository } from "@/repositories/IRepository";

export default abstract class AbstractRepository implements IRepository<any> {
  /**
   * Get all entities
   * @returns {Promise<T[]>}
   */
  async getAll<T>(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  /**
   * Get entity by id
   * @param {string} id 
   */
  async getById<T>(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  
  /**
   * Save entity
   * @param {T extends IDTO<any>} entity 
   * @returns {Promise<T>}
   */
  async save<T extends IDTO<any>>(entity: T): Promise<T> {
    throw new Error("Method not implemented.");
  }

  /**
   * Update entity
   * @param {string} id 
   * @param {T extends DTO<any>} entity 
   * @returns {Promise<T>}
   */
  async update<T extends IDTO<any>>(id: string, entity: T): Promise<T> {
    throw new Error("Method not implemented.");
  }

  /**
   * Delete entity
   * @param {string} id 
   * @returns {Promise<T>}
   */
  async delete<T>(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  
}
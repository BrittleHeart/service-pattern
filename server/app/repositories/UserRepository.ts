import AbstractRepository from "@/repositories/AbstractRepository";
import User from "@/http/models/UserModel"


export default class UserRepository extends AbstractRepository {
  private readonly _userModel: User
  
  constructor() {
    super()
    this._userModel = new User()
  }

  async getAll<User>(): Promise<User[]> {
    return await this._userModel.find()
  }

  async getById<User>(id: string): Promise<User> {
    return await this._userModel.findById(id)
  }

  async save<User>(entity: User): Promise<User> {
    return await this._userModel.create(entity)
  }
  
  async update<User>(id: string, entity: User): Promise<User> {
    return await this._userModel.findByIdAndUpdate(id, entity)
  }

  async delete<User>(id: string): Promise<User> {
    return await this._userModel.findByIdAndDelete(id)
  }

  async getByEmail<User>(email: string): Promise<User> {
    return await this._userModel.findOne({ email })
  }

  async getByRole<User>(role: string): Promise<User[]> {
    return await this._userModel.find({ role })
  }

  
}
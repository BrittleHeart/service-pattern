import { injectable } from "inversify";
import AbstractRepository from "@/repositories/AbstractRepository";
import UserModel from "@/http/models/UserModel";
import { UserDTO, UserUpdateDTO } from "@/http/DTO/UserDTO";

@injectable()
export default class UserRepository extends AbstractRepository {
  private readonly _userModel: typeof UserModel;

  constructor() {
    super();

    this._userModel = UserModel
  }

  async getAll<UserModel>(): Promise<UserModel[]> {
    return await this._userModel.find()
  }

  async getById<User>(id: string): Promise<any> {
    return await this._userModel.findOne({ _id: id })
  }

  async save<UserDTO>(entity: UserDTO): Promise<any> {
    return await this._userModel.create(entity)
  }

  async update<UserUpdateDTO>(id: string, entity: UserUpdateDTO): Promise<any> {
    return await this._userModel.findByIdAndUpdate(id, entity);
  }

  async delete<User>(id: string): Promise<any> {
    return await this._userModel.findByIdAndDelete(id);
  }

  async getByEmail<User>(email: string): Promise<any> {
    return await this._userModel.findOne({ email });
  }

  async getByRole<User>(role: string): Promise<User[]> {
    return await this._userModel.find({ role })
  }
}
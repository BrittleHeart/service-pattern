import { injectable } from "inversify";
import AbstractRepository from "@/repositories/AbstractRepository";
import UserModel from "@/http/models/UserModel";
import { UserDTO, UserUpdateDTO } from "@/http/DTO/UserDTO";
import { IUser } from "@/http/models/IUser";

@injectable()
export default class UserRepository extends AbstractRepository {
  private readonly _userModel: typeof UserModel;

  constructor() {
    super();

    this._userModel = UserModel;
  }

  async getAll<IUser>(): Promise<IUser[]> {
    return await this._userModel.find();
  }

  async getById<IUser>(id: string): Promise<IUser | null> {
    return await this._userModel.findOne({ _id: id });
  }

  async save<UserDTO>(entity: UserDTO): Promise<any> {
    return await this._userModel.create(entity);
  }

  async update<UserUpdateDTO>(id: string, entity: UserUpdateDTO): Promise<any> {
    return await this._userModel.findByIdAndUpdate(id, entity);
  }

  async delete(id: string): Promise<any> {
    return await this._userModel.findByIdAndDelete(id);
  }

  async getByEmail<IUser>(email: string): Promise<IUser | null> {
    return await this._userModel.findOne({ email });
  }

  async getByRole<User>(role: string): Promise<User[]> {
    return await this._userModel.find({ role });
  }
}
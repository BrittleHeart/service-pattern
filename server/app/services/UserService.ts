import { IUser } from "@/http/models/IUser";
import UserRepository from "@/repositories/UserRepository";
import { inject, injectable } from "inversify";
import { ObjectId } from "mongoose";

@injectable()
export default class UserService {
  private readonly _userRepository: UserRepository

  constructor(@inject(UserRepository) private userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  public async getAll(): Promise<IUser[]> {
    return await this._userRepository.getAll();
  }

  public async getOne(id: string): Promise<IUser> {
    return await this._userRepository.getById(id);
  }
}
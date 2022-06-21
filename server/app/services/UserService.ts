import { UserDTO, UserUpdateDTO } from "@/http/DTO/UserDTO";
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

  public async getAll(): Promise<IUser[] | null> {
    const users = await this._userRepository.getAll();
    if (!users.length) {
      return null
    }

    /** @ts-ignore */
    return users;
  }

  public async getOne(id: string): Promise<IUser | null> {
    return await this._userRepository.getById(id);
  }

  public async create(user: UserDTO): Promise<IUser> {
    return await this._userRepository.save(user);
  }

  public async update(id: string, user: UserUpdateDTO): Promise<IUser> {
    return await this._userRepository.update(id, user);
  }

  public async delete(id: string): Promise<any> {
    return await this._userRepository.delete(id);
  }

  public getByEmail(email: string): Promise<IUser | null> {
    return this._userRepository.getByEmail(email);
  }

  public getByRole(role: string): Promise<IUser[]> {
    return this._userRepository.getByRole(role);
  }

}
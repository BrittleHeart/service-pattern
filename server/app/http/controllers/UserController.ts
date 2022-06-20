import { controller, httpGet, request, response } from "inversify-express-utils";
import { Response, Request } from 'express'
import { inject } from "inversify";
import BaseController from "@/http/controllers/BaseController";
import UserService from "@/services/UserService";
import { IUser } from "../models/IUser";

@controller('/users')
export default class UserController extends BaseController {
  private readonly _userService: UserService;

  constructor(@inject(UserService) private userService: UserService) {
    super();
    this._userService = userService
  }

  @httpGet('/')
  public async index(): Promise<IUser[] | string> {
    // if(!this._userService.getAll())

    return await this._userService.getAll()
  }
}
import { Schema, Model } from "mongoose";

export default class User extends Model {
  constructor() {
    super({
      id: {
        type: Schema.Types.ObjectId,
        auto: true,
        required: true
      },
      role: {
        type: String,
        required: false,
        default: "user"
      },
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      }
    });
  }
}
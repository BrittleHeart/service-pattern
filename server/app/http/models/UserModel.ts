import mongoose, { Schema } from "mongoose";
import { IUser } from "./IUser";

const userModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
      default: "user",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  }, { 
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
  } 
});

export default mongoose.model("User", userModel);

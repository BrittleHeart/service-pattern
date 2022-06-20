import mongoose, { mongo, MongooseError } from "mongoose";
import IDatabaseConfig from "@/providers/IDatabaseConfig";

export default abstract class DatabaseProvider {
  private readonly _connectionConfig: IDatabaseConfig;

  constructor(connectionConfig: IDatabaseConfig) {
    this._connectionConfig = connectionConfig;
  }

  public async connect() {
    return await mongoose.connect("mongodb://localhost:27017/serverService", {
      autoIndex: true,
    })
  }
}

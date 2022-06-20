import mongoose, { mongo, MongooseError } from 'mongoose'
import IDatabaseConfig from "@/providers/IDatabaseConfig";

export default abstract class DatabaseProvider {
  private readonly _connectionConfig: IDatabaseConfig
  protected databaseContext: Promise<void | typeof mongoose>;
  
  constructor(connectionConfig: IDatabaseConfig) {
    this._connectionConfig = connectionConfig;

    this.databaseContext = mongoose.connect(connectionConfig.uri, {
      autoIndex: true,
      maxConnecting: 5
    }).then(connect => connect)
  }

  public async connect(): Promise<void | typeof mongoose> {
    try {
      console.log('Works');
      return await this.databaseContext
    } catch(error) {
      console.log(error);
    }
  }
}
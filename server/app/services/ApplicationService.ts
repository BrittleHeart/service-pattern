import { injectable } from "inversify";
import MongoDatabaseProvider from "@/providers/MongoDatabaseProvider";

@injectable()
export default abstract class ApplicationService {
  private databaseContext: MongoDatabaseProvider

  constructor() {
    const connectionConfig = {
      uri: "mongodb://localhost:27017/serverService",
      user: "",
      password: "",
      database: "serverService",
    };
    
    this.databaseContext = new MongoDatabaseProvider(connectionConfig);
  }

  /**
   * bootstrap the application
   * @returns {Promise<void>}
   */
  public async run(): Promise<void> {
    await this.databaseContext.connect();
    

    return new Promise<void>((resolve, reject) => "App works")
  }
}
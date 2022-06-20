import DatabaseProvider from "@/providers/DatabaseProvider";
import IDatabaseConfig from "./IDatabaseConfig";

export default class MongoDatabaseProvider extends DatabaseProvider {
  constructor(connectionConfig: IDatabaseConfig) {
    super(connectionConfig);
  }
}
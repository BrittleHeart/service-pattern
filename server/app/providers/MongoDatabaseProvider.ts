import { injectable } from "inversify";
import DatabaseProvider from "@/providers/DatabaseProvider";
import IDatabaseConfig from "./IDatabaseConfig";

@injectable()
export default class MongoDatabaseProvider extends DatabaseProvider {
  constructor(connectionConfig: IDatabaseConfig) {
    super(connectionConfig);
  }
}
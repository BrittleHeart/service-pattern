import { IApplication } from "@/IApplication";
import Application from "@/Application";

export class Kernel implements IApplication {
  public async run(app: Application): Promise<void> {
    return await app.bootstrap();
  }
}
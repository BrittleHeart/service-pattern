import ApplicationService from "@/services/ApplicationService";
import { injectable } from "inversify";
import { IApplicationService } from "@/services/IApplicationService";
import { inject } from "inversify";

@injectable()
export class Kernel implements IApplicationService {
  constructor(@inject(ApplicationService) private application: ApplicationService) {}

  public async run(): Promise<void> {
    return await this.application.run();
  }
}
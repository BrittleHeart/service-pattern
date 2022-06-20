import ApplicationService from "@/services/ApplicationService";

export interface IApplicationService {
  run(app: ApplicationService): Promise<void>;
}

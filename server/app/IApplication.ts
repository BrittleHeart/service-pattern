import Application from "@/Application";

export interface IApplication {
  run(app: Application): Promise<void>;
}

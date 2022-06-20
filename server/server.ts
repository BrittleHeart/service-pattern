import 'reflect-metadata'
import { Container } from 'inversify';
import Application from '@/Application';
import { Kernel } from '@/Kernel';
import { IApplication } from '@/IApplication';

const container = new Container({
  defaultScope: 'Singleton',
});

container.bind<IApplication>('IApplication').to(Kernel);

async function bootstrap() {
  const app = new Kernel();
  await app.run(new Application());

  return app
}

bootstrap()


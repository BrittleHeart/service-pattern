import 'reflect-metadata'
import ApplicationService from '@/services/ApplicationService';
import { Container } from 'inversify';
import { Kernel } from '@/Kernel';
import { InversifyExpressServer } from 'inversify-express-utils';
import UserRepository from '@/repositories/UserRepository';
import UserService from '@/services/UserService';

import '@/http/controllers/UserController'
import bodyParser from 'body-parser';

const container = new Container();

container.bind<ApplicationService>(ApplicationService).toSelf().inSingletonScope()
container.bind<UserRepository>(UserRepository).toSelf()
container.bind<UserService>(UserService).toSelf()
const kernel = container.resolve<Kernel>(Kernel)

async function bootstrap() {
  const server = new InversifyExpressServer(container)
  const app = server.build()
  // app use json response and body parse
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.listen(3000, () => console.log('listening on port http://localhost:3000'))
  
  await kernel.run()

  return app
}

export default container

bootstrap()
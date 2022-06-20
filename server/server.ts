import 'reflect-metadata'
import ApplicationService from '@/services/ApplicationService';
import { Container } from 'inversify';
import { Kernel } from '@/Kernel';

const container = new Container();

container.bind<ApplicationService>(ApplicationService).toSelf().inSingletonScope()
const kernel = container.resolve<Kernel>(Kernel)

kernel.run()

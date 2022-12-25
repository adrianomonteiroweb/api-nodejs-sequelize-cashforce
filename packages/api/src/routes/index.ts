import buyersRouter from './buyers.routes';
import cnpjsRouter from './cnpjs.routes';
import ordersRouter from './orders.routes';
import providersRouter from './providers.routes';
import sponsorsRouter from './sponsors.routes';
import usersRouter from './users.routes';

export const routes = [
  buyersRouter,
  cnpjsRouter,
  usersRouter,
  providersRouter,
  sponsorsRouter,
  ordersRouter,
];

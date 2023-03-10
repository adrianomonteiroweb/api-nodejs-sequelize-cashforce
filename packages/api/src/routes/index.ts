import buyersRouter from './buyers.routes';
import cnpjsRouter from './cnpjs.routes';
import invoicesRouter from './invoices.routes';
import offersRouter from './offers.routes';
import orderportionsRouter from './orderportions.routes';
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
  orderportionsRouter,
  offersRouter,
  invoicesRouter,
];

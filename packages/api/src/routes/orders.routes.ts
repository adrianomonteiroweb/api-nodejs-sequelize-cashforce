import express from 'express';

import { OrdersController } from '../database/controllers/Orders.controller';

const ordersRouter = express.Router();

const ordersController = new OrdersController();

ordersRouter.get('/orders', (req, res) =>
  ordersController.getAllOrdersController(req, res)
);

export default ordersRouter;

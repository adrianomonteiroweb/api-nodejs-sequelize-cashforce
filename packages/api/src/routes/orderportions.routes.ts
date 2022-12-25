import express from 'express';

import { OrderportionsController } from '../database/controllers/Orderportions.controller';

const orderportionsRouter = express.Router();

const orderportionsController = new OrderportionsController();

orderportionsRouter.get('/orderportions', (req, res) =>
  orderportionsController.getAllOrderportionsController(req, res)
);

export default orderportionsRouter;

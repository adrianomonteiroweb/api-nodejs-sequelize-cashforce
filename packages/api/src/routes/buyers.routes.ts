import express from 'express';

const buyersRouter = express.Router();

import { BuyersController } from './../database/controllers/Buyers.controller';

const buyersController = new BuyersController();

buyersRouter.get('/buyers', (req, res) =>
  buyersController.getAllBuyersController(req, res)
);

buyersRouter.post('/buyers', (req, res) =>
  buyersController.createNewBuyerController(req, res)
);

export default buyersRouter;

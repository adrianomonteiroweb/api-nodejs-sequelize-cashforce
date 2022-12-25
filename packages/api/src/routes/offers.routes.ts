import express from 'express';

import { OffersController } from '../database/controllers/Offers.controller';

const offersRouter = express.Router();

const offersController = new OffersController();

offersRouter.get('/offers', (req, res) =>
  offersController.getAllOffersController(req, res)
);

export default offersRouter;

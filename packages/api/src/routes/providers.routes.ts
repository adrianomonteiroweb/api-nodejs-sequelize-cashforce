import express from 'express';

const providersRouter = express.Router();

import { ProvidersController } from './../database/controllers/Providers.controller';

const providersController = new ProvidersController();

providersRouter.get('/providers', (req, res) =>
  providersController.getAllProvidersController(req, res)
);

providersRouter.post('/providers', (req, res) =>
  providersController.createNewProviderController(req, res)
);

export default providersRouter;

import express from 'express';

import { CNPJsController } from '../database/controllers/CNPJs.controller';

const cnpjsRouter = express.Router();

const cnpjsController = new CNPJsController();

cnpjsRouter.get('/cnpjs', (req, res) =>
  cnpjsController.getAllCNPJsController(req, res)
);

export default cnpjsRouter;
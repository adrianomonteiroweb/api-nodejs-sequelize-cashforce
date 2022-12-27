import express from 'express';

import { CNPJsController } from '../database/controllers/CNPJs.controller';

const cnpjsRouter = express.Router();

const cnpjsController = new CNPJsController();

cnpjsRouter.get('/cnpjs', (req, res) =>
  cnpjsController.getAllCNPJsController(req, res)
);

cnpjsRouter.get('/cnpj', (req, res) =>
  cnpjsController.getIdByCNPJController(req, res)
);

cnpjsRouter.post('/cnpjs', (req, res) =>
  cnpjsController.createNewCNPJController(req, res)
);

export default cnpjsRouter;

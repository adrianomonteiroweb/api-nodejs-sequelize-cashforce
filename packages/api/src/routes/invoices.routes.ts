import express from 'express';

const invoicesRouter = express.Router();

import { InvoicesController } from '../database/controllers/Invoices.controller';

const invoicesController = new InvoicesController();

invoicesRouter.get('/invoices', (req, res) =>
  invoicesController.getAllInvoicesController(req, res)
);

export default invoicesRouter;

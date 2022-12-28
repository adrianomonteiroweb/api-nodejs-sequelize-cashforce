import express from 'express';

const sponsorsRouter = express.Router();

import { SponsorsController } from './../database/controllers/Sponsors.controller';

const sponsorsController = new SponsorsController();

sponsorsRouter.get('/sponsors', (req, res) =>
  sponsorsController.getAllSponsorsController(req, res)
);

sponsorsRouter.post('/sponsors', (req, res) =>
  sponsorsController.createNewSponsorController(req, res)
);

export default sponsorsRouter;

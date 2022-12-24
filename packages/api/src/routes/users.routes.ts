import express from 'express';

import { UsersController } from '../database/controllers/Users.controller';

const usersRouter = express.Router();

const usersController = new UsersController();

usersRouter.get('/users', (req, res) =>
  usersController.getAllUsersController(req, res)
);

export default usersRouter;

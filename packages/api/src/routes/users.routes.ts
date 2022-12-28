import express from 'express';

import { UsersController } from '../database/controllers/Users.controller';

const usersRouter = express.Router();

const usersController = new UsersController();

usersRouter.get('/users', (req, res) =>
  usersController.getAllUsersController(req, res)
);

usersRouter.post('/users', (req, res) =>
  usersController.createNewUserController(req, res)
);

export default usersRouter;

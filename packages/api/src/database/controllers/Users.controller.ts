import { Request, Response } from 'express';

import { UsersService } from '../services/Users.services';

export class UsersController {
  private readonly _service = new UsersService();

  async getAllUsersController(_req: Request, res: Response): Promise<Response> {
    let allUsers;

    try {
      allUsers = await this._service.getAllUsersService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allUsers);
  }

  async createNewUserController(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      await this._service.createNewUserService(req.body);

      return res.status(200).json({ message: 'User created successfully' });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}

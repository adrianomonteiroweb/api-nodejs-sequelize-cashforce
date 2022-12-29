import UsersModel from '../models/UsersModel';

import { IUser } from '../interfaces/IUser';

export class UsersRepository {
  private readonly _usersModel = UsersModel;

  async getAllUsersRepository() {
    const allUsers = await this._usersModel.findAll();

    return allUsers;
  }

  async createNewUserRepository(user: IUser | any) {
    await this._usersModel.create(user);
  }

  async getIdByUserEmailRepository(email: string) {
    const idByUserEmail = await this._usersModel.findOne({ where: { email } });

    return idByUserEmail?.dataValues.id ? idByUserEmail?.dataValues.id : false;
  }
}

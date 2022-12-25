import UsersModel from '../models/UsersModel';

export class UsersRepository {
  private readonly _usersModel = UsersModel;

  async getAllUsersRepository() {
    const allUsers = await this._usersModel.findAll();

    return allUsers;
  }
}

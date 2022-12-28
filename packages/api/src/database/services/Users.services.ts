import { UsersRepository } from '../repositories/Users.repository';

import { IUser } from '../interfaces/IUser';

export class UsersService {
  private readonly _usersRepository = new UsersRepository();

  async getAllUsersService() {
    const allUsers = await this._usersRepository.getAllUsersRepository();

    return allUsers;
  }

  async createNewUserService(user: IUser) {
    await this._usersRepository.createNewUserRepository(user);
  }
}

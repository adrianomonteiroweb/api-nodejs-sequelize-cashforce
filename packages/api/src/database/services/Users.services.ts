import { UsersRepository } from '../repositories/Users.repository';

export class UsersService {
  private readonly _usersRepository = new UsersRepository();

  async getAllUsersService() {
    const allUsers = await this._usersRepository.getAllUsersRepository();

    return allUsers;
  }
}

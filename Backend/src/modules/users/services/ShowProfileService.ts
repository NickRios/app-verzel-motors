import { injectable, inject } from "tsyringe";

import IUsersRepository from "../repositories/IUsersRepository";

import User from "../model/User";

interface IRequest {
  user_id: string;
}

@injectable()
class ShowProfileService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  }
}

export default ShowProfileService;

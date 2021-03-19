import { hash } from 'bcryptjs'
import { injectable, inject } from 'tsyringe'

import User from '../model/User';
import IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository) {}

    public async execute({ name , email, password }: IRequest): Promise<User> {
        const checkUserExist = await this.usersRepository.findByEmail(email);

        if (checkUserExist) {
            throw new Error('Email address already used.');
        }

        const hashedPassoword = await hash(password, 8);

        const user = await this.usersRepository.create({
            name,
            email,
            password: hashedPassoword,
        });


        return user;
    }

}

export default CreateUserService;
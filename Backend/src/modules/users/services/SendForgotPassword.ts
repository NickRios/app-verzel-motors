import { injectable, inject } from 'tsyringe'
import AppError from '../../../errors/AppError';

//import User from '../model/User';
import IUsersRepository from '../repositories/IUsersRepository'
import IUserTokensRepository from '../repositories/IUserTokensRepository'

interface IRequest {
    email: string;
}

@injectable()
class SendForgotPasswordService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository, 

        @inject('UserTokensRepository')
        private userTokensRepository: IUserTokensRepository 
    ) {}
    


    public async execute({ email }: IRequest): Promise<void> {
        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new AppError('User does not exist.');
        }

        await this.userTokensRepository.generate(user.id);
    }

}

export default SendForgotPasswordService;
import { injectable, inject } from 'tsyringe'
import { isAfter, addHours } from 'date-fns'

//import User from '../model/User';
import IUsersRepository from '../repositories/IUsersRepository'
import IUserTokensRepository from '../repositories/IUserTokensRepository'

interface IRequest {
    token: string;
    password: string;
}

@injectable()
class ResetPasswordService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository, 

        @inject('UserTokensRepository')
        private userTokensRepository: IUserTokensRepository 
    ) {}
    


    public async execute({ token ,password }: IRequest): Promise<void> {
        const userToken = await this.userTokensRepository.findByToken(token);

        if (!userToken) {
            throw new Error('User Token not exists.');
        }

        const user = await this.usersRepository.findById(userToken.user_id)
        
        if (!user) {
            throw new Error('User not exists.');
        }

        const tokenCreatedAt = userToken.created_at
        const compardeDate = addHours(tokenCreatedAt, 2);

        if (isAfter(Date.now(), compardeDate)) {
            throw new Error('Token expired.');
        }
       

        user.password = password;

        await this.usersRepository.save(user);
    }

}

export default ResetPasswordService;
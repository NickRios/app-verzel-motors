import { getRepository } from 'typeorm'

import Speciality from '../models/Speciality'

interface Request {
	name: string;
}

class CreateSpecialityService {
	public async execute({ name }: Request): Promise<Speciality> {
		const specialitysRepository = getRepository(Speciality);

		const checkSpecialitysExists = await specialitysRepository.findOne({
			where: { name },
		});


		if (checkSpecialitysExists) {
			throw new Error('Especialidade já está cadastrado.')
		}


		const specialitys = specialitysRepository.create({
			name,
		})

		await specialitysRepository.save(specialitys);

		return specialitys;
	}
}

export default CreateSpecialityService

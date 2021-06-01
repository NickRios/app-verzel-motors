import { getRepository } from 'typeorm'

import Speciality from '../models/Speciality'

interface Request {
	id: string;
}

class ListSpecialityService {
	public async execute({ id }: Request): Promise<Speciality> {
		const specialityRepository = getRepository(Speciality)

		const speciality = await specialityRepository.findOne(id)

		if (!speciality){
			throw new Error('Apenas usuários autenticados podem listar as especialidades')
		}

		await specialityRepository.save(speciality)

		return speciality;
	}
}


export default ListSpecialityService

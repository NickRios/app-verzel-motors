import { getRepository } from 'typeorm'

import Hospital from '../models/Hospital'

interface Request {
	name: string;
}

class CreateHospitalService {
	public async execute({ name }: Request): Promise<Hospital> {
		const hospitalsRepository = getRepository(Hospital);

		const checkHospitalsExists = await hospitalsRepository.findOne({
			where: { name },
		});


		if (checkHospitalsExists) {
			throw new Error('Hospital já está cadastrado.')
		}


		const hospitals = hospitalsRepository.create({
			name
		})

		await hospitalsRepository.save(hospitals);

		return hospitals;
	}
}

export default CreateHospitalService

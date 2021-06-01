import { Router } from 'express'
import { getCustomRepository } from 'typeorm'

import CreateHospitalService from '../services/CreateHospitalService'
import HospitalsRepository from '../repositories/HospitalsRepository'


const hospitalsRouter = Router();

hospitalsRouter.get('/', async (request, response) => {
	const hospitalsRepository = getCustomRepository(HospitalsRepository)
	const hospitals = await hospitalsRepository.find()

	return response.json(hospitals)
})

hospitalsRouter.post('/', async (request, response) => {
	try {
		const { name } = request.body

		const createHospital = new CreateHospitalService();

		const hospital = await createHospital.execute({
			name,
		})

		return response.json(hospital);

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})


export default hospitalsRouter

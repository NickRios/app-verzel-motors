import { Router } from 'express'
import { getCustomRepository } from 'typeorm'

import CreateSpecialityService from '../services/CreateSpecialityService'
import SpecialitysRepository from '../repositories/SpecialitysRepository'


const specialitysRouter = Router();

specialitysRouter.get('/', async (request, response) => {
	const specialitysRepository = getCustomRepository(SpecialitysRepository)
	const specialitys = await specialitysRepository.find()

	return response.json(specialitys)
})

specialitysRouter.post('/', async (request, response) => {
	try {
		const { name } = request.body

		const createSpeciality = new CreateSpecialityService();

		const speciality = await createSpeciality.execute({
			name,
		})

		return response.json(speciality);

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})


export default specialitysRouter

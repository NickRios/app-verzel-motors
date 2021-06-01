import { getCustomRepository } from 'typeorm'
import { startOfHour } from 'date-fns'

import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface Request {
	user_id: string,
	type: string;
	medicalSpecialty: string;
	hospital: string;
	date: Date;
}

class CreateAppointmentService {
	public async execute({ type, medicalSpecialty, hospital, date, user_id }: Request): Promise<Appointment> {
		const appointmentsRepository = getCustomRepository(AppointmentsRepository)

		const appointmentDate = startOfHour(date)

		const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate)

		if (findAppointmentInSameDate) {
			throw Error ('Agendamento já realizado')
		}

		const appointment = appointmentsRepository.create({
			user_id,
			type,
			medicalSpecialty,
			hospital,
			date: appointmentDate
		})

		await appointmentsRepository.save(appointment)

		return appointment
	}
}

export default CreateAppointmentService

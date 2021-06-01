import { EntityRepository, Repository } from 'typeorm'

import Speciality from '../models/Speciality'


@EntityRepository(Speciality)
class SpecialitysRepository extends Repository<Speciality> {
	public async findById(id: string): Promise<Speciality | undefined> {
		const speciality = await this.findOne(id);

    return speciality;
	}



}


export default SpecialitysRepository

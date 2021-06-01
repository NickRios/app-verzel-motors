import { EntityRepository, Repository } from 'typeorm'

import Hospital from '../models/Hospital'


@EntityRepository(Hospital)
class HospitalsRepository extends Repository<Hospital> {
	public async findById(id: string): Promise<Hospital | undefined> {
		const hospital = await this.findOne(id);

    return hospital;
	}

}


export default HospitalsRepository

import { Entity , Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

import Hospital from './Hospital'

@Entity('specialitys')
class Speciality {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@ManyToOne(() => Hospital)
	@JoinColumn({ name: 'id'})
	hospital: Hospital
}

export default Speciality

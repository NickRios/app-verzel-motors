import { Entity , Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('hospitals')
class Hospital {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	speciality_id: string
}

export default Hospital

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointments1618323814854 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'appointments',
				columns: [{
					name:'id',
					type: 'uuid',
					isPrimary: true,
					generationStrategy: 'uuid',
					default: 'uuid_generate_v4()'
				},
				{
					name: 'user',
					type: 'varchar',
				},
				{
					name: 'type',
					type: 'varchar',
				},
				{
					name: 'medicalSpecialty',
					type: 'varchar',
				},
				{
					name: 'hospital',
					type: 'varchar',
				},
				{
					name: 'date',
					type: 'timestamp with time zone',
				},
				{
					name: 'created_at',
					type: 'timestamp',
					default: 'now()'
				},
				{
					name: 'updated_at',
					type: 'timestamp',
					default: 'now()'
				}
			],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('appointments')
	}
}

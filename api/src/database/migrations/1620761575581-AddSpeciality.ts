import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class AddSpeciality1620761575581 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'specialitys',
				columns: [{
					name:'id',
					type: 'uuid',
					isPrimary: true,
					generationStrategy: 'uuid',
					default: 'uuid_generate_v4()'
				},
				{
					name: 'name',
					type: 'varchar',
				}],
			})
		)

		await queryRunner.createForeignKey('hospitals', new TableForeignKey({
			name: 'SpecialityHospital',
			columnNames: ['speciality_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'specialitys',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
			}),
		);

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('hospitals','SpecialityHospital');

		await queryRunner.dropTable('specialitys')
	}

}


import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddHospital1620761407071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: 'hospitals',
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
					},
					{
						name: 'speciality_id',
						type: 'uuid',
						isNullable: true,
					}],
				})
			)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('hospitals')
    }

}

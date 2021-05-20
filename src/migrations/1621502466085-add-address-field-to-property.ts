import {MigrationInterface, QueryRunner} from "typeorm";

export class addAddressFieldToProperty1621502466085 implements MigrationInterface {
    name = 'addAddressFieldToProperty1621502466085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" ADD "address" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" DROP COLUMN "address"`);
    }

}

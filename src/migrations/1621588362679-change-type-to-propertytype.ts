import {MigrationInterface, QueryRunner} from "typeorm";

export class changeTypeToPropertytype1621588362679 implements MigrationInterface {
    name = 'changeTypeToPropertytype1621588362679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" RENAME COLUMN "type" TO "propertyType"`);
        await queryRunner.query(`ALTER TYPE "booking-schema"."property_type_enum" RENAME TO "property_propertytype_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "booking-schema"."property_propertytype_enum" RENAME TO "property_type_enum"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" RENAME COLUMN "propertyType" TO "type"`);
    }

}

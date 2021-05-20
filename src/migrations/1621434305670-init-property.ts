import {MigrationInterface, QueryRunner} from "typeorm";

export class initProperty1621434305670 implements MigrationInterface {
    name = 'initProperty1621434305670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "booking-schema"."property_type_enum" AS ENUM('hotel', 'hostel', 'others')`);
        await queryRunner.query(`CREATE TABLE "booking-schema"."property" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" text NOT NULL, "type" "booking-schema"."property_type_enum" NOT NULL, CONSTRAINT "PK_179781c5c2b59265b33be8814ce" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "booking-schema"."property"`);
        await queryRunner.query(`DROP TYPE "booking-schema"."property_type_enum"`);
    }

}

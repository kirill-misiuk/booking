import {MigrationInterface, QueryRunner} from "typeorm";

export class initUser1621425472641 implements MigrationInterface {
    name = 'initUser1621425472641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "booking-schema"."user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "UQ_4295be9670e8de8d627e86e7139" UNIQUE ("email"), CONSTRAINT "PK_ddbeaaae351b787b984db25b36f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "booking-schema"."user"`);
    }

}

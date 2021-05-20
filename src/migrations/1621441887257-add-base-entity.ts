import {MigrationInterface, QueryRunner} from "typeorm";

export class addBaseEntity1621441887257 implements MigrationInterface {
    name = 'addBaseEntity1621441887257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."user" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."user" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."user" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."user" DROP COLUMN "createdAt"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class editSomeFields1621457066996 implements MigrationInterface {
    name = 'editSomeFields1621457066996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" RENAME COLUMN "description" TO "comment"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ALTER COLUMN "comment" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."property" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ALTER COLUMN "comment" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" RENAME COLUMN "comment" TO "description"`);
    }

}

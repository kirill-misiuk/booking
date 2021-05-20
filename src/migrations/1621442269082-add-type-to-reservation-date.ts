import {MigrationInterface, QueryRunner} from "typeorm";

export class addTypeToReservationDate1621442269082 implements MigrationInterface {
    name = 'addTypeToReservationDate1621442269082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP COLUMN "startDate"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD "startDate" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP COLUMN "endDate"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD "endDate" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP COLUMN "endDate"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD "endDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP COLUMN "startDate"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD "startDate" TIMESTAMP NOT NULL`);
    }

}

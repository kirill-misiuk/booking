import {MigrationInterface, QueryRunner} from "typeorm";

export class initLastTables1621439238021 implements MigrationInterface {
    name = 'initLastTables1621439238021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "booking-schema"."reservation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "roomId" uuid, "userId" uuid, CONSTRAINT "PK_5e1a062af28521208c8d25c9f1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking-schema"."room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "propertyId" uuid NOT NULL, CONSTRAINT "PK_891a0eab6bbbca2af843799f21a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD CONSTRAINT "FK_5cf9bd6ceca32670306acdd110a" FOREIGN KEY ("roomId") REFERENCES "booking-schema"."room"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" ADD CONSTRAINT "FK_4c5b036d51bd1ec6469f34d5bdf" FOREIGN KEY ("userId") REFERENCES "booking-schema"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" ADD CONSTRAINT "FK_9eaa46ba9f95555e9b4a4413241" FOREIGN KEY ("propertyId") REFERENCES "booking-schema"."property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking-schema"."room" DROP CONSTRAINT "FK_9eaa46ba9f95555e9b4a4413241"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP CONSTRAINT "FK_4c5b036d51bd1ec6469f34d5bdf"`);
        await queryRunner.query(`ALTER TABLE "booking-schema"."reservation" DROP CONSTRAINT "FK_5cf9bd6ceca32670306acdd110a"`);
        await queryRunner.query(`DROP TABLE "booking-schema"."room"`);
        await queryRunner.query(`DROP TABLE "booking-schema"."reservation"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";
import * as faker from 'faker';
import { PropertyType } from '../common';


export class initMockData1621543460045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (let i =0; i<=5; i++) {
           await this.createUser(queryRunner);
           const property = await this.createProperty(queryRunner);
           await this.createRoom(queryRunner, property)
        }
    }

    private async createUser(queryRunner: QueryRunner) {
        return queryRunner.query(`
        INSERT INTO "booking-schema".user(
        "email",
        "firstName",
        "lastName"
        )
        VALUES(
        '${faker.internet.email()}',
        '${faker.name.firstName()}',
        '${faker.name.lastName()}'
        ) 
        `)
    }

    private async createProperty(queryRunner: QueryRunner) {
        return queryRunner.query(`
        INSERT INTO "booking-schema".property(
        "title",
        "description",
        "address",
        "type"
        )
        VALUES(
        '${faker.random.words(5)}',
        '',
        '${faker.address.streetAddress()}',
        '${PropertyType.HOTEL}'
        ) RETURNING *;
        `)
    }

    private async createRoom(queryRunner: QueryRunner, res: any) {
        return queryRunner.query(`
        INSERT INTO "booking-schema".room(
        "title",
        "description",
        "propertyId"
        )
        VALUES(
        '${faker.random.words(5)}',
        '${faker.random.words(5)}',
        '${res[0].id}'
        )
        `)
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "booking-schema".property`)
        await queryRunner.query(`DELETE FROM "booking-schema".user`)
    }
}

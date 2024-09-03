import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1725275826940 implements MigrationInterface {
    name = 'Migrations1725275826940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createDateTime" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedDateTime" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedDateTime" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createDateTime" SET DEFAULT CURRENT_TIMESTAMP`);
    }

}

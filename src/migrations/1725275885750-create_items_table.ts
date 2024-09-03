import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddItemsTable1725275045932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE items (id SERIAL PRIMARY KEY,
      item_name VARCHAR(300) NOT NULL,
      item_description VARCHAR(300) NOT NULL,
      item_price INT NOT NULL,
      "isArchived" boolean NOT NULL DEFAULT false,
      "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "createdBy" character varying(300) NOT NULL,
      "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "lastChangedBy" character varying(300) NOT NULL,
      "internalComment" character varying(300))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE items`);
  }
}

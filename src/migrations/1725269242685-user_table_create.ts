// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class UserTableCreate1725269242685 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(
//       `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true,
//       "isArchived" boolean NOT NULL DEFAULT false,
//       "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
//       "createdBy" character varying(300) NOT NULL,
//       "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
//       "lastChangedBy" character varying(300) NOT NULL,
//       "internalComment" character varying(300),
//       "name" character varying(300) NOT NULL,
//       "email" character varying(300) NOT NULL,
//       CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE "user"`);
//   }
// }

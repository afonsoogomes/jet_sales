import { MigrationInterface, QueryRunner } from "typeorm";

export class MessageLogsMigration1751146287251 implements MigrationInterface {
    name = 'MessageLogsMigration1751146287251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message_logs" ("id" SERIAL NOT NULL, "phone" character varying NOT NULL, "message" text NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f0aae0d876a96fa1da0a1b97444" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "message_logs"`);
    }

}

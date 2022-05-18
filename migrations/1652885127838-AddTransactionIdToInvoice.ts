import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTransactionIdToInvoice1652885127838 implements MigrationInterface {
    name = 'AddTransactionIdToInvoice1652885127838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice" ADD "transactionId" uuid`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "transactionId"`);
    }

}

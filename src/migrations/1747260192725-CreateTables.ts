import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1747260192725 implements MigrationInterface {
    name = 'CreateTables1747260192725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT '"2025-05-14T22:03:14.227Z"', CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registrationId" character varying, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "password" character varying NOT NULL, "permission" character varying NOT NULL DEFAULT 'TRAINEE', "status" character varying NOT NULL DEFAULT 'PENDING', "isDriver" boolean NOT NULL DEFAULT false, "isLeader" boolean NOT NULL DEFAULT false, "imageUrl" character varying, "deletedAt" TIMESTAMP, "deletedBy" character varying, "createdAt" TIMESTAMP DEFAULT '"2025-05-14T22:03:14.228Z"', "birthDate" character varying, "approvedBy" character varying, "courseId" character varying, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_660cced3eb3232d317a712dd00" UNIQUE ("courseId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "licensePlate" character varying NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, "year" character varying NOT NULL, "isAvailable" boolean NOT NULL, "deletedAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT '"2025-05-14T22:03:14.234Z"', CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicleTrip" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "vehicleId" character varying NOT NULL, "driverId" character varying NOT NULL, "date" character varying NOT NULL, "kmInitial" character varying NOT NULL, "kmFinal" character varying NOT NULL, "startAt" character varying NOT NULL, "endAt" character varying NOT NULL, "place" character varying NOT NULL, "reason" character varying NOT NULL, "createdByUserId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT '"2025-05-14T22:03:14.234Z"', CONSTRAINT "REL_78aed4cb170c4e9c7ba680c46b" UNIQUE ("vehicleId"), CONSTRAINT "REL_800582b77a039f930307845a06" UNIQUE ("driverId"), CONSTRAINT "REL_8d237bd7fc350432caf1f1739b" UNIQUE ("createdByUserId"), CONSTRAINT "PK_8e31f518a1e19ac63083a46dc35" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "settings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "key" character varying NOT NULL, "value" jsonb, "createdAt" TIMESTAMP NOT NULL DEFAULT '"2025-05-14T22:03:14.280Z"', CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "duty" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" character varying NOT NULL, "shift" character varying NOT NULL, "leaderId" character varying NOT NULL, "driverId" character varying NOT NULL, "firstRescuerId" character varying NOT NULL, "secondRescuerId" character varying NOT NULL, "radioOperatorId" character varying NOT NULL, "assistantRadioOperatorId" character varying NOT NULL, "traineeId" character varying NOT NULL, "isAvailable" character varying NOT NULL DEFAULT true, "note" character varying NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT '"2025-05-14T22:03:14.340Z"', CONSTRAINT "PK_16bc289cd1d422d96af276d4927" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rescuerChecklist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dutyId" character varying NOT NULL, "vehicleId" character varying NOT NULL, "checklistFilledId" character varying, "createdByUserId" character varying NOT NULL, "createdAt" character varying NOT NULL DEFAULT '"2025-05-14T22:03:14.341Z"', CONSTRAINT "REL_51d43c4975f9c092d3329206c0" UNIQUE ("dutyId"), CONSTRAINT "REL_653ba767fc67a3b96e5d7f8d2d" UNIQUE ("vehicleId"), CONSTRAINT "REL_568fb13fa02c601ac9043ed3b7" UNIQUE ("createdByUserId"), CONSTRAINT "PK_582f117bd4cb76d5b4501abc1ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "radioOperatorChecklist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dutyId" character varying NOT NULL, "note" character varying, "checklistFilledId" character varying, "createdByUserId" character varying NOT NULL, "createdAt" character varying NOT NULL DEFAULT '"2025-05-14T22:03:14.383Z"', CONSTRAINT "REL_8944d110ff146652e85a93f003" UNIQUE ("dutyId"), CONSTRAINT "REL_8a8b39ae2337146554ed7191fb" UNIQUE ("createdByUserId"), CONSTRAINT "PK_ac5237bc43b14b28ae81342f7fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dutyRequestPosition" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dutyRequestId" character varying NOT NULL, "position" character varying NOT NULL, CONSTRAINT "PK_88fdc0953b88b7c96cf7eb9f5e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dutyRequest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" character varying NOT NULL, "shift" character varying NOT NULL, "userId" character varying NOT NULL, "startAt" character varying NOT NULL, "endAt" character varying NOT NULL, "note" character varying, "deletedAt" TIMESTAMP, "deletedBy" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT '"2025-05-14T22:03:14.473Z"', CONSTRAINT "PK_7aa56160b9b4f9311b99a2822e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dutyCareChecklist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dutyId" character varying NOT NULL, "note" character varying, "date" character varying NOT NULL, "time" character varying NOT NULL, "vehicleId" character varying NOT NULL, "reason" character varying NOT NULL, "victimName" character varying NOT NULL, "victimGender" character varying NOT NULL, "victimAge" integer NOT NULL, "victimDocument" character varying, "incidentAddress" character varying NOT NULL, "incidentAddressDistrict" character varying NOT NULL, "incidentAddressCity" character varying NOT NULL, "incidentContinuation" character varying NOT NULL, "incidentEvolution" character varying NOT NULL, "checklistFilledId" character varying NOT NULL, "createdByUserId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT '"2025-05-14T22:03:14.488Z"', CONSTRAINT "REL_1b9b613872a696516662363272" UNIQUE ("dutyId"), CONSTRAINT "REL_f967b4eafc0b1af447f956cabf" UNIQUE ("vehicleId"), CONSTRAINT "REL_c7a2d2e78610ad29525679eaf1" UNIQUE ("createdByUserId"), CONSTRAINT "PK_52f0c8f8b790e07405b124a4b0d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checklist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e4b437f5107f2a9d5b744d4eb4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checklistFilled" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checklistId" character varying NOT NULL, CONSTRAINT "PK_6e69f3235f60f5e41b5ce805415" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checklistQuestion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checklistId" character varying NOT NULL, "text" character varying NOT NULL, "order" integer NOT NULL, "type" character varying NOT NULL, "hasOtherOption" boolean NOT NULL DEFAULT false, "required" boolean NOT NULL DEFAULT false, "multiple" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_169f94eecc1487cc5f3b898803c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checklistQuestionItem" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checklistQuestionId" character varying NOT NULL, "text" character varying NOT NULL, "order" integer NOT NULL, CONSTRAINT "PK_c7688035d28ab9e421823951c04" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checklistQuestionOption" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checklistQuestionId" character varying NOT NULL, "text" character varying NOT NULL, "order" integer NOT NULL, CONSTRAINT "PK_a6b941b24aab8e96af505ad4c5d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checklistFilledAnswer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checklistFilledId" character varying NOT NULL, "checklistQuestionId" character varying NOT NULL, "checklistQuestion" character varying, "checklistQuestionItem" character varying, "checklistQuestionOption" character varying NOT NULL, CONSTRAINT "PK_1f397b8044257c2d7eeb1c42158" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "driverChecklist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dutyId" character varying NOT NULL, "kmInitial" character varying NOT NULL, "vehicleId" character varying NOT NULL, "checklistFilledId" character varying, "createdByUserId" character varying NOT NULL, "createdAt" character varying NOT NULL DEFAULT '"2025-05-14T22:03:14.518Z"', CONSTRAINT "REL_ab130b920c820f5057feaa3a37" UNIQUE ("dutyId"), CONSTRAINT "REL_f4ccb304c20359898b80fee6d9" UNIQUE ("vehicleId"), CONSTRAINT "REL_0ec0add611c71426f50dda0c95" UNIQUE ("createdByUserId"), CONSTRAINT "PK_23babfd1a96f0b68851055eecfd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_660cced3eb3232d317a712dd001" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicleTrip" ADD CONSTRAINT "FK_78aed4cb170c4e9c7ba680c46ba" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicleTrip" ADD CONSTRAINT "FK_800582b77a039f930307845a062" FOREIGN KEY ("driverId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicleTrip" ADD CONSTRAINT "FK_8d237bd7fc350432caf1f1739bb" FOREIGN KEY ("createdByUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rescuerChecklist" ADD CONSTRAINT "FK_51d43c4975f9c092d3329206c0f" FOREIGN KEY ("dutyId") REFERENCES "duty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rescuerChecklist" ADD CONSTRAINT "FK_653ba767fc67a3b96e5d7f8d2d8" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rescuerChecklist" ADD CONSTRAINT "FK_568fb13fa02c601ac9043ed3b77" FOREIGN KEY ("createdByUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "radioOperatorChecklist" ADD CONSTRAINT "FK_8944d110ff146652e85a93f003d" FOREIGN KEY ("dutyId") REFERENCES "duty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "radioOperatorChecklist" ADD CONSTRAINT "FK_8a8b39ae2337146554ed7191fbd" FOREIGN KEY ("createdByUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dutyCareChecklist" ADD CONSTRAINT "FK_1b9b613872a6965166623632721" FOREIGN KEY ("dutyId") REFERENCES "duty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dutyCareChecklist" ADD CONSTRAINT "FK_f967b4eafc0b1af447f956cabf0" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dutyCareChecklist" ADD CONSTRAINT "FK_c7a2d2e78610ad29525679eaf1b" FOREIGN KEY ("createdByUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "driverChecklist" ADD CONSTRAINT "FK_ab130b920c820f5057feaa3a375" FOREIGN KEY ("dutyId") REFERENCES "duty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "driverChecklist" ADD CONSTRAINT "FK_f4ccb304c20359898b80fee6d92" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "driverChecklist" ADD CONSTRAINT "FK_0ec0add611c71426f50dda0c957" FOREIGN KEY ("createdByUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "driverChecklist" DROP CONSTRAINT "FK_0ec0add611c71426f50dda0c957"`);
        await queryRunner.query(`ALTER TABLE "driverChecklist" DROP CONSTRAINT "FK_f4ccb304c20359898b80fee6d92"`);
        await queryRunner.query(`ALTER TABLE "driverChecklist" DROP CONSTRAINT "FK_ab130b920c820f5057feaa3a375"`);
        await queryRunner.query(`ALTER TABLE "dutyCareChecklist" DROP CONSTRAINT "FK_c7a2d2e78610ad29525679eaf1b"`);
        await queryRunner.query(`ALTER TABLE "dutyCareChecklist" DROP CONSTRAINT "FK_f967b4eafc0b1af447f956cabf0"`);
        await queryRunner.query(`ALTER TABLE "dutyCareChecklist" DROP CONSTRAINT "FK_1b9b613872a6965166623632721"`);
        await queryRunner.query(`ALTER TABLE "radioOperatorChecklist" DROP CONSTRAINT "FK_8a8b39ae2337146554ed7191fbd"`);
        await queryRunner.query(`ALTER TABLE "radioOperatorChecklist" DROP CONSTRAINT "FK_8944d110ff146652e85a93f003d"`);
        await queryRunner.query(`ALTER TABLE "rescuerChecklist" DROP CONSTRAINT "FK_568fb13fa02c601ac9043ed3b77"`);
        await queryRunner.query(`ALTER TABLE "rescuerChecklist" DROP CONSTRAINT "FK_653ba767fc67a3b96e5d7f8d2d8"`);
        await queryRunner.query(`ALTER TABLE "rescuerChecklist" DROP CONSTRAINT "FK_51d43c4975f9c092d3329206c0f"`);
        await queryRunner.query(`ALTER TABLE "vehicleTrip" DROP CONSTRAINT "FK_8d237bd7fc350432caf1f1739bb"`);
        await queryRunner.query(`ALTER TABLE "vehicleTrip" DROP CONSTRAINT "FK_800582b77a039f930307845a062"`);
        await queryRunner.query(`ALTER TABLE "vehicleTrip" DROP CONSTRAINT "FK_78aed4cb170c4e9c7ba680c46ba"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_660cced3eb3232d317a712dd001"`);
        await queryRunner.query(`DROP TABLE "driverChecklist"`);
        await queryRunner.query(`DROP TABLE "checklistFilledAnswer"`);
        await queryRunner.query(`DROP TABLE "checklistQuestionOption"`);
        await queryRunner.query(`DROP TABLE "checklistQuestionItem"`);
        await queryRunner.query(`DROP TABLE "checklistQuestion"`);
        await queryRunner.query(`DROP TABLE "checklistFilled"`);
        await queryRunner.query(`DROP TABLE "checklist"`);
        await queryRunner.query(`DROP TABLE "dutyCareChecklist"`);
        await queryRunner.query(`DROP TABLE "dutyRequest"`);
        await queryRunner.query(`DROP TABLE "dutyRequestPosition"`);
        await queryRunner.query(`DROP TABLE "radioOperatorChecklist"`);
        await queryRunner.query(`DROP TABLE "rescuerChecklist"`);
        await queryRunner.query(`DROP TABLE "duty"`);
        await queryRunner.query(`DROP TABLE "settings"`);
        await queryRunner.query(`DROP TABLE "vehicleTrip"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "course"`);
    }

}

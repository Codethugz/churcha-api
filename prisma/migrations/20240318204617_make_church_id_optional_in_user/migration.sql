-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_churchId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "churchId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "churches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[profile_mail]` on the table `ind_assessments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ind_assessments_profile_mail_key" ON "ind_assessments"("profile_mail");

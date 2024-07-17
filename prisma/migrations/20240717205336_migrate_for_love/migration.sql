/*
  Warnings:

  - You are about to drop the `IND_Assessments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "IND_Assessments";

-- CreateTable
CREATE TABLE "ind_assessments" (
    "id" TEXT NOT NULL,
    "profile_name" TEXT NOT NULL,
    "profile_mail" TEXT NOT NULL,
    "profile_img" TEXT NOT NULL,
    "rating_text" TEXT NOT NULL,
    "rating_media" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ind_assessments_pkey" PRIMARY KEY ("id")
);

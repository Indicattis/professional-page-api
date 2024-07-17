-- CreateTable
CREATE TABLE "IND_Assessments" (
    "id" TEXT NOT NULL,
    "profile_name" TEXT NOT NULL,
    "profile_mail" TEXT NOT NULL,
    "profile_img" TEXT NOT NULL,
    "rating_text" TEXT NOT NULL,
    "rating_media" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IND_Assessments_pkey" PRIMARY KEY ("id")
);

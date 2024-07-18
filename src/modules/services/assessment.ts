import { PrismaClient } from "@prisma/client";
import { Assessment as PrismaAssessment } from "@prisma/client";
import { AssessmentDTO } from "../models/assessment";

const prisma = new PrismaClient();

export class create_assessment {
  async execute(data: AssessmentDTO): Promise<PrismaAssessment> {
    const existingClientWithEmail = await prisma.assessment.findUnique({
      where: {
        profile_mail: data.profile_mail,
      },
    });

    if (existingClientWithEmail) {
      throw new Error('Email já cadastrado');
    }

    const item = await prisma.assessment.create({
      data: {
        profile_name: data.profile_name,
        profile_mail: data.profile_mail,
        profile_img:  data.profile_img,
        rating_text:  data.rating_text,
        rating_media: data.rating_media,
      },
    });

    return item;
  }
}

export class select_assessment {
  async fetch(): Promise<AssessmentDTO[]> {
    const items = await prisma.assessment.findMany();
    return items;
  }
}

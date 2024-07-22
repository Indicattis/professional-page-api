import { prisma } from "../../prisma";
import { AssessmentDTO } from "../models/assessment";






export class create_assessment {
  async execute(data: AssessmentDTO): Promise<AssessmentDTO> {
    const existingClientWithEmail = await prisma.assessment.findUnique({
      where: {
        profile_mail: data.profile_mail,
      },
    });

    // const existingClientWithPhone = await prisma.cliente.findUnique({
    //   where: {
    //     client_phone: data.client_phone,
    //   },
    // });

    if (existingClientWithEmail) {
      throw new Error('O usuario do mail informado já comentou anteriormente!');
    }

    // if (existingClientWithPhone) {
    //   throw new Error('Telefone já cadastrado');
    // }

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
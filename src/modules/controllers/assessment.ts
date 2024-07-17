import { AssessmentDTO } from "../models/assessment";
import { Request, Response } from "express";
import { create_assessment, select_assessment } from "../services/assessment";



export class ctr_create_assessment {
    async create(req: Request, res: Response) {
      const data: AssessmentDTO = req.body;
  
      const newAssessment = new create_assessment();
  
      try {
        const result = await newAssessment.execute(data);
        return res.status(201).json(result);
      } catch (error: any) {
        if (error.message === 'O usuario do mail informado já comentou anteriormente!') {
          return res.status(400).json({ error: error.message });
        } else {
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
      }
    }
  
  }
  export class ctr_select_assessment {

    async fetch(req: Request, res: Response) {
        const selectAssessment = new select_assessment();
        const result = await selectAssessment.fetch();
        return res.status(200).json(result);
    }
  
}
  
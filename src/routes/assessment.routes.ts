import { Router } from "express";
import { ctr_create_assessment, ctr_select_assessment } from "../modules/controllers/assessment";

const CTR_Create_Assessment = new ctr_create_assessment();
const CTR_Select_Assessment = new ctr_select_assessment();

const Routes_Assessment = Router();

Routes_Assessment.post("/assessment-insert", CTR_Create_Assessment.create)
Routes_Assessment.get("/assessment-select", CTR_Select_Assessment.fetch)

export {Routes_Assessment}
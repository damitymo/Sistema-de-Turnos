import { Router } from "express";
import { getAppointmentsController, getAppointmentByIdController, createAppointmentScheduleController, updateAppointmentController } from "../controllers/appointmentsControllers";

const appointmentsRouter: Router = Router();

appointmentsRouter.get('/', getAppointmentsController);
appointmentsRouter.get('/:id', getAppointmentByIdController);
appointmentsRouter.post('/schedule', createAppointmentScheduleController);
appointmentsRouter.put('/:id', updateAppointmentController);

export default appointmentsRouter;
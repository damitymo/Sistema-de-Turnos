import { Request, Response } from "express";

export const getAppointmentsController = async(req: Request, res: Response) => {
    res.send('Get appointments controller');
}

export const getAppointmentByIdController = async(req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`Get appointment by id controller: ${id}`);
}

export const createAppointmentScheduleController = (req: Request, res: Response) => {
    const { date, time, userId } = req.body;
    res.send(`Create appointment controller: ${date}, ${time}, ${userId}`);
}
export const updateAppointmentController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { date, time } = req.body;
    res.send(`Update appointment controller: ${id}, ${date}, ${time}`);
}   


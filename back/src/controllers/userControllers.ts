import { Request, Response } from "express";

export const getUsersController = async (req: Request, res: Response) => {
    res.send('Get users controller');
}

export const getUserByIdController = async(req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`Get user by id controller: ${id}`);
}   

export const createUserRegisterController = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.send(`Create user controller: ${name}, ${email}`);
}   

export const createUserLoginController   = (req: Request, res: Response) => {
    const { email, password } = req.body;
    res.send(`Login user controller: ${email}, ${password}`);
}

import { Router } from "express";
import { getUsersController, getUserByIdController, createUserRegisterController, createUserLoginController } from "../controllers/userControllers";


const userRouter: Router = Router();

userRouter.get('/', getUsersController);
userRouter.get('/:id', getUserByIdController);
userRouter.post('/register', createUserRegisterController);
userRouter.post('/login', createUserLoginController);

export default userRouter;

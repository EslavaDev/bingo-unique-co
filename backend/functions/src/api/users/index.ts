import {Router} from 'express';
import {UserController} from './user.controller';
const controller = new UserController();
const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);

export default router
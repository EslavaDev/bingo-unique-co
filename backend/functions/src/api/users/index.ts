import {Router} from 'express';
import {UserController} from './user.controller';
import { verifyToken } from '../../helpers/jwt';
const controller = new UserController();
const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/decode', verifyToken,  controller.decode);

export default router
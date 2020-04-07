import {Router} from 'express';
import * as services from './board.controller';
const router = Router();

router.post('/generate', services.generate);

export default router
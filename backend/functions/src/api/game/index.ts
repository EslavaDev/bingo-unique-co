import {Router} from 'express';
import * as services from './game.controller';
const router = Router();

router.post('/generate', services.generate);
router.post('/win', services.win);

export default router
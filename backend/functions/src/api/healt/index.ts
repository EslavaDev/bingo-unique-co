import {Router} from 'express';
import * as services from './healt.controller';
const router = Router();

router.get('/', services.healt);

export default router
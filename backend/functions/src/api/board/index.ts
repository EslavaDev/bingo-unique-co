import {Router} from 'express';
import {BoardController} from './board.controller';
const router = Router();
const controller = new BoardController();

router.get('/generate', controller.generate);
router.get('/pool', controller.generatePool);
router.delete('/', controller.deleteBoard);

export default router
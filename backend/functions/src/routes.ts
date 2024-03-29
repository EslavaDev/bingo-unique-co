
import healt from './api/healt'; 
import board from './api/board'; 
import game from './api/game'; 
import user from './api/users'; 
import { verifyToken } from './helpers/jwt';

export const router = (app: any) => {
  // Insert routes below
  app.use('/v1/healt', healt);
  app.use('/v1/board',verifyToken, board);
  app.use('/v1/game',verifyToken, game);
  app.use('/v1/user', user);
};
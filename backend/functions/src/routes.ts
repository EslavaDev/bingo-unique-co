
import healt from './api/healt'; 

export const router = (app: any) => {
  // Insert routes below
  app.use('/v1/healt', healt);
};
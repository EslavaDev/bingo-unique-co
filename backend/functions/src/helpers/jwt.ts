
import {verify} from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import { SEED_AUTH } from '../config/env';

declare global {
    interface User{
        user: string
    }
}

export const verifyToken = (req: Request & any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if(!token){
    return res.status(401).json({
        err: {
          message: 'Token no valido',
        },
      });
  }
  return verify(token, SEED_AUTH, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: 'Token no valido',
        },
      });
    }
    req.user = decoded.user;
    return next();
  });
};
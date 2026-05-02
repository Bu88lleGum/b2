import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseLoggedMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    
    res.on('finish', () => {
      console.log(
        `Here is a description of the Response,\n${req.baseUrl},\n${res.statusCode},\nthe times is ${Date.now() - start} ms`
      );
    });
    
    next();
  }
}
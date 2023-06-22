import { Request, Response, NextFunction } from "express";

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
   console.log(`Xatolik: ${req.method} ${req.originalUrl} -> ${error.message}`);
   res.status(500).json({
      error: 'Internal Server Error'
   })
}

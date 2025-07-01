import { Request, Response, NextFunction } from 'express';

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
  console.error('Erro interno:', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
}

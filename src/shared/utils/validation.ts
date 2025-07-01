import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  phone: Joi.string().required(),
  message: Joi.string().required()
});

export function validateMessage(req: Request, res: Response, next: NextFunction): void {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
    return;
  }
  next();
}

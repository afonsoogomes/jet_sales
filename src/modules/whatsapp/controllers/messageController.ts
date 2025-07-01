import { Request, Response } from 'express';
import sendMessageQueue from '../queues/sendMessageQueue';

export async function sendMessage(req: Request, res: Response): Promise<void> {
  const { phone, message } = req.body;

  await sendMessageQueue.add('send', { phone, message }, {
    attempts: 5,
    backoff: { type: 'exponential', delay: 3000 }
  });

  res.json({ status: 'queued' });
}

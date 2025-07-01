import Bull from 'bull';
import { env } from '@config/env';

export default new Bull(
  'sendMessageQueue',
  env.redisUrl
);

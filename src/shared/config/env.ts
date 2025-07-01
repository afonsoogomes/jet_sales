import dotenv from 'dotenv';
dotenv.config();

export const env = {
  port: Number(process.env.PORT || 3000),
  nodeEnv: process.env.NODE_ENV!,
  databaseUrl: process.env.DATABASE_URL!,
  redisUrl: process.env.REDIS_URL!,
  rabbitmqUrl: process.env.RABBITMQ_URL!,
  sentryDsn: process.env.SENTRY_DSN!,
  rateLimitWindowMilliseconds: Number(process.env.RATE_LIMIT_WINDOW_MILLISECONDS!),
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX),
};
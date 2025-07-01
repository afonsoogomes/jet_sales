import express from 'express';
import rateLimit from 'express-rate-limit';
import * as Sentry from '@sentry/node';

import routes from './routes';
import errorHandler from './shared/middlewares/errorHandler';

import { env } from './shared/config/env';

const app = express();
app.use(express.json());
app.use(rateLimit({ windowMs: env.rateLimitWindowMilliseconds, max: env.rateLimitMax }));
app.use(routes);
app.use(Sentry.Handlers.errorHandler());
app.use(errorHandler);

export default app;
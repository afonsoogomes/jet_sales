import { initDatabase } from '@/bootstrap/database';
import { initRabbitMQ } from '@/bootstrap/rabbitMQ';
import { initBaileys } from '@/bootstrap/baileys';
import { initQueues } from '@/bootstrap/queues';

export async function bootstrap() {
  await initDatabase();
  await initRabbitMQ();
  await initBaileys();
  await initQueues();
}
import { initSendMessageConsumer } from '@/modules/whatsapp/consumers/sendMessageConsumer';
import { connectRabbitMQ } from '@/shared/config/rabbitmq';

export async function initRabbitMQ() {
  await connectRabbitMQ();
  await initSendMessageConsumer();
}
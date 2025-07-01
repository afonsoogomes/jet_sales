import { Job } from 'bull';
import { getChannel } from '@config/rabbitmq';

export default async function sendMessageJob(job: Job): Promise<void> {
  const channel = getChannel();

  if (!channel) {
    return console.error('RabbitMQ channel não disponível');
  }

  channel.sendToQueue('send_message', Buffer.from(JSON.stringify(job.data)), {
    persistent: true
  });
}

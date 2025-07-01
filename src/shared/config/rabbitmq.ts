import amqp, { Channel } from 'amqplib';
import { env } from '@config/env';

let channel: Channel | null = null;

export async function connectRabbitMQ(): Promise<void> {
  try {
    const conn = await amqp.connect(env.rabbitmqUrl);
    channel = await conn.createChannel();
    console.log('RabbitMQ conectado');
  } catch (error) {
    console.error('Erro ao conectar ao RabbitMQ:', error);
  }
}

export function getChannel(): Channel | null {
  return channel;
}

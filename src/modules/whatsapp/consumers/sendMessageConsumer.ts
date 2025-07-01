import { getChannel } from '@config/rabbitmq';
import { sendMessage } from '@/modules/whatsapp/services/baileys.service';
import { AppDataSource } from '@/data-source';
import { MessageLog } from '@/modules/whatsapp/entities/MessageLog';

export async function initSendMessageConsumer() {
  const channel = getChannel();

  if (!channel) {
    return console.error('Canal RabbitMQ não disponível');
  }

  await channel.assertQueue('send_message', {
    durable: true
  });

  channel.consume('send_message', async (msg) => {
    if (!msg) {
      return console.error('Mensagem vazia recebida');
    }

    const repo = AppDataSource.getRepository(MessageLog);
    const { phone, message } = JSON.parse(msg.content.toString());

    try {
      await sendMessage(phone, message);
      await repo.save({ phone, message, status: 'success' });
      channel.ack(msg);
      console.log('Mensagem enviada com sucesso:', phone, message);
    } catch (err) {
      await repo.save({ phone, message, status: 'fail' });
      channel.nack(msg, false, true);
      console.error('Erro ao enviar mensagem:', err);
    }
  });
}
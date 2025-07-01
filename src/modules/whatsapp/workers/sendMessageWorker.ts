import sendMessageQueue from '@/modules/whatsapp/queues/sendMessageQueue';
import sendMessageJob from '@/modules/whatsapp/jobs/sendMessage.job';

export async function initSendMessageWorker() {
  sendMessageQueue.process('send', async (job) => {
    await sendMessageJob(job);
  });
}

import { initSendMessageWorker } from '@/modules/whatsapp/workers/sendMessageWorker';

export async function initQueues() {
  initSendMessageWorker();
}
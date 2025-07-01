import { initBaileysService } from '@/modules/whatsapp/services/baileys.service';

export async function initBaileys() {
  try {
    await initBaileysService();
    console.log('📲 Baileys iniciado');
  } catch (err) {
    console.error('❌ Erro ao iniciar Baileys:', err);
  }
}
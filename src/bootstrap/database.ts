import { AppDataSource } from '@/data-source';

export async function initDatabase() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log('📦 Banco de dados conectado');
    }
  } catch (error) {
    console.error('❌ Erro ao conectar no banco:', error);
  }
}
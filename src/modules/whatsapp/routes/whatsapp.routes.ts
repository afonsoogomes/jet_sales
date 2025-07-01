import { Router } from 'express';
import { validateMessage } from '@utils/validation';
import { sendMessage } from '@/modules/whatsapp/controllers/messageController';
import { getQrCode } from '../controllers/qrController';

const router = Router();

router.get('/qr-code', getQrCode);
router.post('/send-message', validateMessage, sendMessage);

export default router;

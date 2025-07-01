import { Router } from 'express';
import whatsappRoutes from '@/modules/whatsapp/routes/whatsapp.routes';

const router = Router();
router.use('/whatsapp', whatsappRoutes);

export default router;
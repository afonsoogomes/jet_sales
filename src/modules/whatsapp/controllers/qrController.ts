import { getCurrentQrCode } from '@/modules/whatsapp/services/baileys.service';
import { Request, Response } from 'express';
import * as qrcode from 'qrcode';

export async function getQrCode(req: Request, res: Response): Promise<void> {
  const qr = getCurrentQrCode();

  if (!qr) {
    res.status(404).json({ message: 'QR Code não disponível ou já autenticado.' });
    return;
  }

  const qrImage = await qrcode.toDataURL(qr);
  res.status(200).send(`<img src="${qrImage}" />`);
}

import { Boom } from "@hapi/boom";
import makeWASocket, { DisconnectReason, useMultiFileAuthState, WASocket } from "@whiskeysockets/baileys";

let latestQr: string | null = null;
let sock: WASocket;

export async function initBaileysService(): Promise<WASocket> {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys');

  sock = makeWASocket({
    auth: state,
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async ({ connection, qr, lastDisconnect }) => {
    if (qr) {
      console.log('📲 QR Code atualizado!');
      latestQr = qr;
    }

    if (connection === 'open') {
      console.log('✅ Conectado ao WhatsApp!');
      await sock.sendPresenceUpdate('unavailable');
      latestQr = null;
    }

    if (connection === 'close') {
      console.log('❌ Conexão encerrada!');

      let reason = new Boom(lastDisconnect!.error).output.statusCode;

      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete and Scan Again`);
      } else if (reason === DisconnectReason.connectionClosed) {
        initBaileysService();
      } else if (reason === DisconnectReason.connectionLost) {
        initBaileysService();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
      } else if (reason === DisconnectReason.loggedOut) {
        console.log("Device Logged Out, Please Login Again");
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        initBaileysService();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        initBaileysService();
      } else {
        sock.end(new Error(`Unknown DisconnectReason: ${reason}|${lastDisconnect!.error}`));
      }
    }
  });

  return sock;
}

export function getSocket(): WASocket | null {
  return sock || null;
}

export function getCurrentQrCode() {
  return latestQr;
}

export async function sendMessage(phone: string, message: string): Promise<void> {
  const sock = getSocket();

  if (!sock) {
    throw new Error('Socket não inicializado');
  }

  await sock.sendMessage(`${phone.replace(/\D/g, '')}@s.whatsapp.net`, {
    text: message
  });

  console.log('Message sent')
}

import request from 'supertest';
import app from '@/app';

describe('POST /send-message', () => {
  it('should return 200 and queue message', async () => {
    const response = await request(app)
      .post('/whatsapp/send-message')
      .send({
        phone: '11999999999',
        message: 'Olá!'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'queued');
  });
});

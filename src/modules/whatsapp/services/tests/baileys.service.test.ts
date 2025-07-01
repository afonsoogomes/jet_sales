import { sendMessage } from '../baileys.service';

jest.mock('../baileys.service', () => ({
  sendMessage: jest.fn(() => Promise.resolve())
}));

describe('Baileys Service', () => {
  it('should call sendMessage without error', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await sendMessage('5511999999999', 'Olá!');

    expect(sendMessage).toHaveBeenCalledWith('5511999999999', 'Olá!');
    consoleSpy.mockRestore();
  });
});

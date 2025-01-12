import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

const token: string = '7301376986:AAFrpKTN4mN6AtFI5YliOpe9Ir_auLCCdZk';

const bot = new TelegramBot(token);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `https://tg-bot-buy-maaya.vercel.app/api/telegram`;

  try {
    await bot.setWebHook(url);
    res.status(200).send('Webhook set successfully');
  } catch (error) {
    console.error('Error setting webhook:', error);
    res.status(500).send('Error setting webhook');
  }
};

export default handler;

import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

// const token = process.env.TELEGRAM_BOT_TOKEN!;
// TODO
const token: string = '7028011735:AAF-3b45TKcrm8Z-xtfDElE6pcAOGXpfBwg';

const bot = new TelegramBot(token);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO
  const url = `https://cat-clicker-game-tg.vercel.app/api/telegram`;

  try {
    await bot.setWebHook(url);
    res.status(200).send('Webhook set successfully');
  } catch (error) {
    console.error('Error setting webhook:', error);
    res.status(500).send('Error setting webhook');
  }
};

export default handler;

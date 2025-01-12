import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

const token: string = '7301376986:AAFrpKTN4mN6AtFI5YliOpe9Ir_auLCCdZk';
const bot = new TelegramBot(token);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (message) {
      const chatId = message.chat.id;
      const text = message.text;

      // Check if the message starts with "/start"
      if (text && text.startsWith('/start')) {
        const welcomeText = `🎉 Welcome to the world of eMaaya!\n🚀 Experience the future of tokens like never before.\n👉 Ready to get started? Tap below to explore more and take the first step in your journey with eMaaya!`;

        const opts = {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `🌟 Explore eMaaya 🌟`,
                  url: `https://emaaya.io`, // Update with the actual eMaaya link
                },
              ],
            ],
          },
        };

        await bot.sendMessage(chatId, welcomeText, opts);
      }
    }

    res.status(200).send('Message processed');
  } else {
    res.status(405).send('Method not allowed');
  }
};


export default handler;

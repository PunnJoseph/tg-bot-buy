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

      // Handle the "/start" message
      if (text && text.startsWith('/start')) {
        const welcomeText = `🎉 Welcome to the world of eMaaya!\n🚀 Experience the future of tokens like never before.\n👉 Ready to get started? Tap below to explore more and take the first step in your journey with eMaaya!`;

        const opts = {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `🔍 Learn More`,
                  callback_data: 'learn_more',
                },
              ],
            ],
          },
        };

        await bot.sendMessage(chatId, welcomeText, opts);
      }

      // Handle the "Learn More" button click
      if (text && text === 'learn_more') {
        const learnMoreText = `🌟 eMaaya is here to revolutionize the way you interact with tokens. Our cutting-edge platform ensures seamless experiences for all users.\n\n🛠 Dive deeper to discover what makes eMaaya unique!`;

        const opts = {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `🚀 Next Step`,
                  callback_data: 'next_step',
                },
              ],
            ],
          },
        };

        await bot.sendMessage(chatId, learnMoreText, opts);
      }

      // Handle the "Next Step" button click
      if (text && text === 'next_step') {
        const nextStepText = `🎯 Congratulations on taking the next step with eMaaya!\n\n💬 For updates, tips, and exclusive features, stay connected with us.`;

        const opts = {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `🌐 Visit Website`,
                  url: `https://emaaya.io`, // Update with the actual eMaaya link
                },
              ],
            ],
          },
        };

        await bot.sendMessage(chatId, nextStepText, opts);
      }
    }

    res.status(200).send('Message processed');
  } else {
    res.status(405).send('Method not allowed');
  }
};

export default handler;

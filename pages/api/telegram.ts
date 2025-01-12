import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

const token: string = '7301376986:AAFrpKTN4mN6AtFI5YliOpe9Ir_auLCCdZk';
const bot = new TelegramBot(token, { webHook: true });

// Set the webhook URL
const webhookUrl = `https://tg-bot-buy-maaya.vercel.app/api/telegram/setWebhook`;
bot.setWebHook(webhookUrl);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body = req.body;

    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

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
    }

    if (body.callback_query) {
      const query = body.callback_query;
      const chatId = query.message?.chat.id;
      const data = query.data;

      if (chatId && data === 'learn_more') {
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

      if (chatId && data === 'next_step') {
        const nextStepText = `🎯 Congratulations on taking the next step with eMaaya!\n\n💬 For updates, tips, and exclusive features, stay connected with us.`;

        const opts = {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `🌐 Visit Website`,
                  url: `https://emaaya.io`, // Replace with your actual link
                },
              ],
            ],
          },
        };

        await bot.sendMessage(chatId, nextStepText, opts);
      }

      // Acknowledge the callback query
      await bot.answerCallbackQuery(query.id);
    }

    res.status(200).send('OK');
  } else {
    res.status(405).send('Method not allowed');
  }
};

export default handler;

import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

const token: string = '7301376986:AAFrpKTN4mN6AtFI5YliOpe9Ir_auLCCdZk';
const bot = new TelegramBot(token, { webHook: true });

// Set the webhook URL
// const webhookUrl = `https://tg-bot-buy-maaya.vercel.app/api/telegram/setWebhook`;
// bot.setWebHook(webhookUrl);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Incoming request:', req.body);

  if (req.method === 'POST') {
    const body = req.body;

    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

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

        // Send the welcome message to the user
        await bot.sendMessage(chatId, welcomeText, opts);
        // Send a message to the specific Telegram ID (111111)
        const targetId = 7697102963;
        const notifyText = `Hey! Someone just started interacting with the bot.`;
        await bot.sendMessage(targetId, notifyText);
      }
    }

    if (body.callback_query) {
      console.log('Callback query:', body.callback_query);
      const query = body.callback_query;
      const chatId = query.message?.chat.id;
      const data = query.data;

      if (chatId && data === 'learn_more') {
        const learnMoreText = `🌟 eMaaya is here to revolutionize the way you interact with tokens. Discover its unique features now!`;

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
        const nextStepText = `🎯 Thank you for exploring eMaaya! Stay tuned for exciting updates and features.`;

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

      await bot.answerCallbackQuery(query.id);
    }

    res.status(200).send('OK');
  } else {
    console.error('Invalid request method:', req.method);
    res.status(405).send('Method not allowed');
  }
};

export default handler;

import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

// TODO: add env in vercel
// const token = process.env.TELEGRAM_BOT_TOKEN!;
const token: string = '7028011735:AAF-3b45TKcrm8Z-xtfDElE6pcAOGXpfBwg';
const bot = new TelegramBot(token);
const INVITE_URL = "https://t.me/Bubble_Kitty_Game_bot/Bubble_Kittie/start";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (message) {
      const chatId = message.chat.id;
      const text = message.text;
      const inviteLink = `${INVITE_URL}?startapp=${chatId}`
      const shareText = 'Will you be my friend? 🐱✨ Join Bubble Kitty and lets catch bubbles together! 🫧🌟';
      const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`

      // Check if the message starts with "/start"
      if (text && text.startsWith('/start')) {
        const startappParam = text.split(' ')[1];

        if (startappParam) {
          // Respond to the user with the extracted parameter
          await bot.sendMessage(chatId, `You started the bot with the parameter: ${startappParam}`);
        }

        const bubbleKittyText = `Welcome to Bubble Kitty! 🌊🐱\n\nYour kitty is ready for some bubble-popping fun! Tap to earn points and manage your energy wisely.\n\n- Click 100 times non-stop to make your kitty surface and earn 3 times more! 🚀\n- Check the Daily Tasks to earn extra points! 🏅\n- Invite your friends and earn rewards together! 🎉\n- Join during Happy Hour to earn 10 times more! [Coming soon!] ⏰\n\nLet the bubble-popping adventure begin! 🐾`;

        const opts = {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `🎮Tap to earn!🎮`,
                  url: `https://t.me/Bubble_Kitty_Game_bot/Bubble_Kittie?start=${startappParam}`, // Pass the parameter forward if needed
                },
              ],
              [
                {
                  text: `Join Channel`,
                  url: `https://t.me/bubblekitty_news`,
                },
                {
                  text: `Follow X`,
                  url: `https://x.com/BubbleKittyCoin`, // Replace with your actual website link
                },
              ],
              [
                {
                  text: `Invite a Friend`,
                  url: fullUrl, // URL to invite a friend
                },
              ],
            ],
          },
        };

        // URL of the image served by Next.js
        const imageUrl = 'https://cat-clicker-game-tg.vercel.app/images/cat-in-jar.png'; // Update with your actual URL
        await bot.sendPhoto(chatId, imageUrl, { caption: bubbleKittyText, ...opts });
      }
    }

    res.status(200).send('Message processed');
  } else {
    res.status(405).send('Method not allowed');
  }
};

export default handler;

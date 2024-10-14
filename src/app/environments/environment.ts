import moment from 'moment';

export const environment = {
  birthdayDate: moment('1999-04-25'),
  christmasDate: moment().set({ date: 25, month: 11 }),
  newYearDate: moment().dayOfYear(1),

  discordWebhookUrl: process.env['DISCORD_WEBHOOK_URL'] as string,
};

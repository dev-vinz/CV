import moment from 'moment';

export const environment = {
  birthdayDate: moment('1999-04-25'),
  christmasStartDate: moment().set({ date: 23, month: 11 }),
  christmasEndDate: moment().set({ date: 26, month: 11 }),
  newYearDate: moment().dayOfYear(1),

  discordWebhookUrl: process.env['DISCORD_WEBHOOK_URL'] as string,
};

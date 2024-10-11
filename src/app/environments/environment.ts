import moment from 'moment';
import 'moment-timezone';

export const environment = {
  discordWebhookUrl: process.env['DISCORD_WEBHOOK_URL'] as string,
  birthdayDate: moment.tz('1999-04-25', 'Europe/Zurich'),
};

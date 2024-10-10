import { config } from 'dotenv';
import { EnvironmentPlugin } from 'webpack';

config();

module.exports = {
  plugins: [new EnvironmentPlugin(['DISCORD_WEBHOOK_URL'])],
  resolve: {
    fallback: { querystring: false },
  },
};

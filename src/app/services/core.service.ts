import { Injectable } from '@angular/core';

import { MessageBuilder, Webhook } from 'webhook-discord';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public async logToDiscordWebhook(message: MessageBuilder): Promise<void> {
    const webhook = new Webhook(environment.discordWebhookUrl);

    await webhook.send(message);
  }
}

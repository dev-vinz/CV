import { Injectable } from '@angular/core';

import { MessageBuilder, Webhook } from 'webhook-discord';

import { environment } from '../environments/environment';

import moment from 'moment';
import 'moment-timezone';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _timezone: string = moment.tz.guess();

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public async logToDiscordWebhook(message: MessageBuilder): Promise<void> {
    const webhook = new Webhook(environment.discordWebhookUrl);

    await webhook.send(message);
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get birthdayDate(): moment.Moment {
    return environment.birthdayDate.tz(this._timezone).startOf('day');
  }

  public get christmasDate(): moment.Moment {
    return environment.christmasDate.tz(this._timezone).startOf('day');
  }

  public get newYearDate(): moment.Moment {
    return environment.newYearDate.tz(this._timezone).startOf('day');
  }

  public get now(): moment.Moment {
    return moment().tz(this._timezone);
  }

  public get today(): moment.Moment {
    return this.now.startOf('day');
  }
}

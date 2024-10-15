import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

import { MessageBuilder, Webhook } from 'webhook-discord';

import { environment } from '../environments/environment';

import moment from 'moment';
import 'moment-timezone';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          CONSTANTS                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _COOKIE_KEY: string = 'vj-cookies-accepted';
  private readonly _LANG_COOKIE_KEY: string = 'vj-preferred-language';

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _timezone: string = moment.tz.guess();

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private readonly _translocoService: TranslocoService) {}

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public acceptCookies(): void {
    localStorage.setItem(this._COOKIE_KEY, 'true');
  }

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

  public get christmasEndDate(): moment.Moment {
    return environment.christmasEndDate.tz(this._timezone).startOf('day');
  }

  public get christmasStartDate(): moment.Moment {
    return environment.christmasStartDate.tz(this._timezone).startOf('day');
  }

  public get isCookiesAccepted(): boolean {
    return localStorage.getItem(this._COOKIE_KEY) === 'true';
  }

  public get newYearDate(): moment.Moment {
    return environment.newYearDate.tz(this._timezone).startOf('day');
  }

  public get now(): moment.Moment {
    return moment().tz(this._timezone);
  }

  public get preferredLanguage(): string {
    return (
      localStorage.getItem(this._LANG_COOKIE_KEY) ||
      this._translocoService.getDefaultLang()
    );
  }

  public get today(): moment.Moment {
    return this.now.startOf('day');
  }

  /* * * * * * * * * * * * * * * *\
  |*           SETTERS           *|
  \* * * * * * * * * * * * * * * */

  public set preferredLanguage(preferredLanguage: string) {
    localStorage.setItem(this._LANG_COOKIE_KEY, preferredLanguage);
  }
}

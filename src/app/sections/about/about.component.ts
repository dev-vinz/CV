import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

import { environment } from '../../environments/environment';

import moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  providers: [provideTranslocoScope({ scope: 'about', alias: 'a' })],
})
export class AboutComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _isCollapsed: boolean = true;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public toggleMore(): void {
    this._isCollapsed = !this._isCollapsed;
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get birthdayDate(): string {
    return environment.birthdayDate.format('DD.MM.YYYY');
  }

  public get currentAge(): number {
    const now = moment().tz('Europe/Zurich');
    return now.diff(environment.birthdayDate, 'years');
  }

  public get isBirthday(): boolean {
    const birthday = environment.birthdayDate;
    const today = moment().tz('Europe/Zurich');

    return (
      today.date() === birthday.date() && today.month() === birthday.month()
    );
  }

  public get isCollapsed(): boolean {
    return this._isCollapsed;
  }

  /* * * * * * * * * * * * * * * *\
  |*           SETTERS           *|
  \* * * * * * * * * * * * * * * */

  public set isCollapsed(isCollapsed: boolean) {
    this._isCollapsed = isCollapsed;
  }
}

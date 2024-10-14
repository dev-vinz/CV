import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

import { CoreService } from '../../services/core.service';

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
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private readonly _coreService: CoreService) {}

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
    return this._coreService.birthdayDate.format('DD.MM.YYYY');
  }

  public get currentAge(): number {
    const now = this._coreService.today;
    return now.diff(this._coreService.birthdayDate, 'years');
  }

  public get isBirthday(): boolean {
    const birthday = this._coreService.birthdayDate;
    const today = this._coreService.today;

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

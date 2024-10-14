import { Component, OnInit } from '@angular/core';

import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _mobileMenuOpened: boolean = false;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private readonly _coreService: CoreService) {}

  public ngOnInit(): void {
    window.scrollTo(0, 0);

    const deviceMode = window.matchMedia('(prefers-color-scheme: dark)');
    const favIcon = document.querySelector('#favicon');

    favIcon?.setAttribute(
      'href',
      deviceMode.matches ? 'darkicon.ico' : 'lighticon.ico'
    );
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get isBirthday(): boolean {
    const birthday = this._coreService.birthdayDate;
    const today = this._coreService.today;

    return (
      today.date() === birthday.date() && today.month() === birthday.month()
    );
  }

  public get isChristmas(): boolean {
    const christmasStart = this._coreService.christmasStartDate;
    const christmasEnd = this._coreService.christmasEndDate;

    const today = this._coreService.today;

    return today.isBetween(christmasStart, christmasEnd, 'day', '[]');
  }

  public get isNewYear(): boolean {
    const newYear = this._coreService.newYearDate;
    const today = this._coreService.today;

    return today.isSame(newYear, 'day');
  }

  public get mobileMenuOpened(): boolean {
    return this._mobileMenuOpened;
  }

  /* * * * * * * * * * * * * * * *\
  |*           SETTERS           *|
  \* * * * * * * * * * * * * * * */

  public set mobileMenuOpened(mobileMenuOpened: boolean) {
    this._mobileMenuOpened = mobileMenuOpened;
  }
}

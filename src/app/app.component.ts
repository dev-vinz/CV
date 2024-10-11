import { Component, OnInit } from '@angular/core';

import { environment } from './environments/environment';

import moment from 'moment';
import 'moment-timezone';

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

  public ngOnInit(): void {
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
    const birthday = environment.birthdayDate;
    const today = moment().tz('Europe/Zurich');

    return (
      today.date() === birthday.date() && today.month() === birthday.month()
    );
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

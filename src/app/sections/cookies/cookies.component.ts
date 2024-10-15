import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss',
  providers: [provideTranslocoScope({ scope: 'cookies', alias: 'co' })],
})
export class CookiesComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _isAccepted: boolean;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private readonly _coreService: CoreService) {
    this._isAccepted = this._coreService.isCookiesAccepted;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public acceptCookies(): void {
    this._isAccepted = true;

    // Delay to show the animation
    setTimeout(() => {
      this._coreService.acceptCookies();
    }, 1000);
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get isAccepted(): boolean {
    return this._isAccepted;
  }
}

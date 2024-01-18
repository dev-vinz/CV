import { Component, Renderer2 } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    private _renderer: Renderer2,
    private _translocoService: TranslocoService
  ) {}

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public downloadCV(): void {
    const link: HTMLElement = this._renderer.createElement('a');

    link.setAttribute('type', 'hidden');
    link.setAttribute('target', '_blank');
    link.setAttribute(
      'href',
      `assets/documents/Vincent_Jeannin_${this._currentLanguage}.pdf`
    );
    link.setAttribute('download', 'Vincent_Jeannin.pdf');

    link.click();
    link.remove();
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PRIVATE                           *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  private get _currentLanguage(): string {
    return this._translocoService.getActiveLang().toUpperCase();
  }
}

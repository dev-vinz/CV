import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-langage-selector',
  templateUrl: './langage-selector.component.html',
  styleUrls: ['./langage-selector.component.scss'],
})
export class LangageSelectorComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private translocoService: TranslocoService) {}

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public change(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get current(): Record<'flag' | 'code' | 'name', string> {
    const lang = this.translocoService.getActiveLang();
    return this.list.find((item) => item.code === lang)!;
  }

  public get list(): Record<'flag' | 'code' | 'name', string>[] {
    return [
      {
        flag: '🇬🇧',
        code: 'en',
        name: 'English',
      },
      {
        flag: '🇫🇷',
        code: 'fr',
        name: 'Français',
      },
    ];
  }
}

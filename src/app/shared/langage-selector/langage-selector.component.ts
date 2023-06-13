import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-langage-selector',
  templateUrl: './langage-selector.component.html',
  styleUrls: ['./langage-selector.component.scss'],
})
export class LangageSelectorComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    const browserLangs = navigator.languages;
    const availableLangs =
      this.translocoService.getAvailableLangs() as string[];

    const lang =
      browserLangs.find((lang) => availableLangs.includes(lang)) ??
      this.translocoService.getDefaultLang();

    this.translocoService.setActiveLang(lang);
  }

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

  public get isMany(): boolean {
    return this.list.length > 1;
  }

  public get list(): Record<'flag' | 'code' | 'name', string>[] {
    return [
      {
        flag: '🇫🇷',
        code: 'fr',
        name: 'Français',
      },
      {
        flag: '🇬🇧',
        code: 'en',
        name: 'English',
      },
      {
        flag: '🇩🇪',
        code: 'de',
        name: 'Deutsch',
      },
    ].filter((r) =>
      this.translocoService
        .getAvailableLangs()
        .map((l) => l.toString())
        .includes(r.code)
    );
  }
}

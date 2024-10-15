import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

import { CoreService } from '../../../../services/core.service';

type Language = {
  code: string;
  name: string;
};

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss',
})
export class LangSelectorComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          CONSTANTS                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly LANGUAGES: Language[] = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
  ];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    private readonly _coreService: CoreService,
    private readonly _translocoService: TranslocoService
  ) {}

  public ngOnInit(): void {
    this._translocoService.setActiveLang(this._coreService.preferredLanguage);
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public buildIconUrl(lang: string): string {
    return `images/countries/${lang}.webp`;
  }

  public changeLang(lang: string): void {
    this._coreService.preferredLanguage = lang;
    this._translocoService.setActiveLang(lang);
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get activeLang(): string {
    const active = this._translocoService.getActiveLang();
    return this.languages.find((lang) => lang.code === active)?.name || '';
  }

  public get iconUrl(): string {
    return this.buildIconUrl(this._translocoService.getActiveLang());
  }

  public get isMany(): boolean {
    return this.languages.length > 1;
  }

  public get languages(): Language[] {
    return this.LANGUAGES.filter((lang) =>
      this._translocoService
        .getAvailableLangs()
        .map((l) => l.toString())
        .includes(lang.code)
    );
  }
}

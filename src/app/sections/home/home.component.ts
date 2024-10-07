import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { provideTranslocoScope, TranslocoService } from '@jsverse/transloco';
import { NgbScrollSpyService } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [provideTranslocoScope({ scope: 'home', alias: 'h' })],
})
export class HomeComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _scrollSpy = inject(NgbScrollSpyService);

  private _typedStrings: string[] = [''];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _translocoService: TranslocoService
  ) {}

  async ngOnInit(): Promise<void> {
    await this._loadTypedStrings();

    this._translocoService.langChanges$ //
      .subscribe(async () => await this._loadTypedStrings());
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public downloadResume(): void {
    const activeLang = this._translocoService.getActiveLang();
    const link: HTMLElement = this._renderer.createElement('a');

    link.setAttribute('type', 'hidden');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `cv/${activeLang}.pdf`);
    link.setAttribute('download', 'Vincent_Jeannin.pdf');

    link.click();
    link.remove();
  }

  public scrollToAbout(): void {
    this._scrollSpy.scrollTo('about');
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get typedStrings(): string[] {
    return this._typedStrings;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PRIVATE                           *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private async _loadTypedStrings(): Promise<void> {
    const software = await firstValueFrom(
      this._translocoService.selectTranslate(
        'software-engineer',
        undefined,
        'home'
      )
    );

    const freelance = await firstValueFrom(
      this._translocoService.selectTranslate(
        'freelance-developer',
        undefined,
        'home'
      )
    );

    this._typedStrings = [software, freelance];
  }
}

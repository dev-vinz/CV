import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Output,
  ViewChild,
} from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';
import { NgbScrollSpyService } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [provideTranslocoScope({ scope: 'navbar', alias: 'n' })],
})
export class NavbarComponent implements AfterContentInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          CONSTANTS                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly HEIGHT_OFFSET: number = 300;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _isMenuOpen: boolean = false;

  private _scrollSpy: NgbScrollSpyService = inject(NgbScrollSpyService);

  @Output()
  public mobileMenuOpened: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('navbar')
  private _navbar?: ElementRef<HTMLElement>;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public ngAfterContentInit(): void {
    this._scrollSpy.start({
      fragments: ['home', 'about', 'training', 'projects', 'contact'],
    });
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public isActive(fragment: string): boolean {
    return this._scrollSpy.active === fragment;
  }

  public scrollTo(fragment: string): void {
    this._scrollSpy.scrollTo(fragment);
  }

  public toggleMenu(): void {
    this._isMenuOpen = !this._isMenuOpen;

    document.body.style.overflow = this._isMenuOpen ? 'hidden' : 'auto';

    this.mobileMenuOpened.emit(this._isMenuOpen);
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  public get menuIcon(): string {
    return this._isMenuOpen ? 'faSolidX' : 'faSolidBarsStaggered';
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          LISTENERS                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  @HostListener('window:resize', ['$event'])
  private _onResize(_: Event): void {
    if (window.innerWidth > 767 && this._isMenuOpen) {
      this.toggleMenu();
    }
  }

  @HostListener('window:scroll', ['$event'])
  private _onScroll(_: Event): void {
    if (window.scrollY > this.HEIGHT_OFFSET) {
      this._navbar?.nativeElement.classList.add('vj-scrolled');
    } else {
      this._navbar?.nativeElement.classList.remove('vj-scrolled');
    }
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public darkMode: boolean = false;

  @Output()
  public isDarkMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  ngOnInit(): void {
    const deviceMode = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = deviceMode.matches;

    this.toggleTheme();
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public toggleTheme(): void {
    this.isDarkMode.emit(this.darkMode);

    document.body.classList.remove(this.darkMode ? 'light' : 'dark');
    document.body.classList.add(this.darkMode ? 'dark' : 'light');
  }
}

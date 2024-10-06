import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          CONSTANTS                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly NB_BUBBLES: number = 32;
  private readonly START_YEAR: number = 2023;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _bubbles: string[] = [];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public ngOnInit(): void {
    for (let i = 0; i < this.NB_BUBBLES; i++) {
      const style = `
          --size: ${this._randomSize}rem;
          --distance: ${this._randomDistance}rem;
          --position: ${this._randomPosition}%;
          --time: ${this._randomTime}s;
          --delay: ${this._randomDelay}s;
        `;

      this._bubbles.push(style);
    }
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get bubbles(): string[] {
    return this._bubbles;
  }

  public get copyright(): string {
    const today = new Date();

    if (today.getFullYear() === this.START_YEAR) {
      return `${this.START_YEAR}`;
    }

    return `${this.START_YEAR}-${today.getFullYear()}`;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PRIVATE                           *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  private get _randomSize(): number {
    return 2 + Math.random() * 2;
  }

  private get _randomDistance(): number {
    return 4 + Math.random() * 4;
  }

  private get _randomPosition(): number {
    return -2 + Math.random() * 100;
  }

  private get _randomTime(): number {
    return 2 + Math.random() * 2;
  }

  private get _randomDelay(): number {
    return -(2 + Math.random() * 2);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-ballons',
  templateUrl: './birthday-ballons.component.html',
  styleUrl: './birthday-ballons.component.scss',
})
export class BirthdayBallonsComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          CONSTANTS                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly NB_BALLOONS: number = 30;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _ballons: string[] = [];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public ngOnInit(): void {
    for (let i = 0; i < this.NB_BALLOONS; i++) {
      this._ballons.push(this._randomStyle);
    }
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get balloons(): string[] {
    return this._ballons;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PRIVATE                           *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _generateRandom(max: number): number {
    return Math.floor(Math.random() * max);
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  private get _randomStyle(): string {
    const r = this._generateRandom(255);
    const g = this._generateRandom(255);
    const b = this._generateRandom(255);
    const mt = this._generateRandom(200);
    const ml = this._generateRandom(50);
    const dur = this._generateRandom(5) + 5;

    return `
      background-color: rgba(${r},${g},${b},0.7);
      color: rgba(${r},${g},${b},0.7);
      box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
      margin: ${mt}px 0 0 ${ml}px;
      --vj-duration: ${dur}s;
    `;
  }
}

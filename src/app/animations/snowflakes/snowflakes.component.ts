import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snowflakes',
  templateUrl: './snowflakes.component.html',
  styleUrl: './snowflakes.component.scss',
})
export class SnowflakesComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          CONSTANTS                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly NB_SNOWFLAKES: number = 200;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _snowflakes: string[] = [];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public ngOnInit(): void {
    for (let i = 0; i < this.NB_SNOWFLAKES; i++) {
      this._snowflakes.push(this._randomStyle);
    }
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get snowflakes(): string[] {
    return this._snowflakes;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PRIVATE                           *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _generateRandom(max: number): number {
    return Math.random() * max;
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  private get _randomStyle(): string {
    const left = this._generateRandom(100);
    const size = this._generateRandom(10) + 5;
    const duration = this._generateRandom(5) + 5;
    const delay = this._generateRandom(5);
    const opacity = this._generateRandom(0.5) + 0.5;

    const randomX = this._generateRandom(1);

    return `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      opacity: ${opacity};
      box-shadow: 0 0 20px 5px rgba(255, 255, 255, ${opacity * 0.7});
      --vj-random-x: ${randomX};
    `;
  }
}

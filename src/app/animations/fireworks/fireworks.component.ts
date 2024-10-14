import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Fireworks } from 'fireworks-js';

@Component({
  selector: 'app-fireworks',
  templateUrl: './fireworks.component.html',
  styleUrl: './fireworks.component.scss',
})
export class FireworksComponent implements AfterViewInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  @ViewChild('fireworks')
  private readonly _fireworksContainer?: ElementRef<HTMLDivElement>;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public ngAfterViewInit(): void {
    if (this._fireworksContainer) {
      const element = this._fireworksContainer.nativeElement;
      const fireworks = new Fireworks(element, {
        autoresize: true,
        hue: {
          min: 0,
          max: 360,
        },
        acceleration: 1.02,
        brightness: {
          min: 50,
          max: 80,
        },
        decay: {
          min: 0.015,
          max: 0.03,
        },
        delay: {
          min: 30,
          max: 60,
        },
        explosion: 5,
        flickering: 50,
        intensity: 10,
        friction: 0.97,
        gravity: 1.5,
        opacity: 0.5,
        particles: 200,
        traceLength: 3,
        traceSpeed: 10,
        rocketsPoint: {
          min: 40,
          max: 60,
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 4,
          },
          trace: {
            min: 0.1,
            max: 1,
          },
        },
        lineStyle: 'square',
      });

      fireworks.start();
    }
  }
}

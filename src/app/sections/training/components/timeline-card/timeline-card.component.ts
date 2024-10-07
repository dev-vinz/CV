import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrl: './timeline-card.component.scss',
})
export class TimelineCardComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  @Input()
  public degree: string = '';

  @Input()
  public description: string = '';

  @Input()
  public location: string = '';

  @Input()
  public year: string = '';
}

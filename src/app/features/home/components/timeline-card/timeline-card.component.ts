import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss'],
})
export class TimelineCardComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public isOdd: boolean = false;

  @Input()
  public duration: string = '';

  @Input()
  public startYear: string = '';

  @Input()
  public title: string = '';

  @Input()
  public section: string = '';

  @Input()
  public location: string = '';

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           SETTERS           *|
  \* * * * * * * * * * * * * * * */

  public set id(value: number) {
    this.isOdd = value % 2 !== 0;
  }
}

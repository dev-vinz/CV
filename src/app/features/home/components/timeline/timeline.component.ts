import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';

import { TimelineCardComponent } from '../timeline-card/timeline-card.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements AfterContentInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  @ContentChildren('card')
  timelineCards!: QueryList<TimelineCardComponent>;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public ngAfterContentInit(): void {
    this.timelineCards.forEach((card, index) => {
      card.id = index;
    });
  }
}

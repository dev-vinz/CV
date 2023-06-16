import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private static NB_BUBBLES: number = 32;

  public today: Date;
  public bubbleStyles: string[];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor() {
    this.today = new Date();
    this.bubbleStyles = [];
  }

  ngOnInit(): void {
    for (let i = 0; i < FooterComponent.NB_BUBBLES; i++) {
      const style = `
        --size: ${FooterComponent.generateSize()}rem;
        --distance: ${FooterComponent.generateDistance()}rem;
        --position: ${FooterComponent.generatePosition()}%;
        --time: ${FooterComponent.generateTime()}s;
        --delay: ${FooterComponent.generateDelay()}s;
      `;

      this.bubbleStyles.push(style);
    }
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PRIVATE                           *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private static generateSize(): number {
    return 2 + Math.random() * 2;
  }

  private static generateDistance(): number {
    return 4 + Math.random() * 4;
  }

  private static generatePosition(): number {
    return -2 + Math.random() * 100;
  }

  private static generateTime(): number {
    return 2 + Math.random() * 2;
  }

  private static generateDelay(): number {
    return -(2 + Math.random() * 2);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
})
export class SocialButtonComponent {
  @Input()
  public tooltip: string = 'Undefined';
  @Input()
  public url: string = '#';
  @Input()
  public blank: boolean = false;
}

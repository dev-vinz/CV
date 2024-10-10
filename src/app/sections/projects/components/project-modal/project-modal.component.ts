import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _modal: NgbActiveModal = inject(NgbActiveModal);

  @Input()
  public description: string = '';

  @Input()
  public githubUrl?: string;

  @Input()
  public projectUrl?: string;

  @Input()
  public technicalStack: string = '';

  @Input()
  public title: string = '';

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get imageUrl(): string {
    return `images/projects/${this.title
      .replace(/ /g, '-')
      .toLowerCase()}.webp`;
  }

  public get modal(): NgbActiveModal {
    return this._modal;
  }
}

import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _modalService: NgbModal = inject(NgbModal);

  @Input()
  public description: string = '';

  @Input()
  public projectUrl?: string;

  @Input()
  public technicalStack: string = '';

  @Input()
  public title: string = '';

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public openModal(): void {
    const modalRef = this._modalService.open(ProjectModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.description = this.description;
    modalRef.componentInstance.projectUrl = this.projectUrl;
    modalRef.componentInstance.technicalStack = this.technicalStack;
    modalRef.componentInstance.title = this.title;
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get imageUrl(): string {
    return `images/projects/${this.title
      .replace(/ /g, '-')
      .toLowerCase()}.webp`;
  }
}

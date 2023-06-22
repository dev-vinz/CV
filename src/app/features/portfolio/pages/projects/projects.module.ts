import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    PreviewCardComponent,
    ProjectDetailComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, TranslocoModule],
})
export class ProjectsModule {}

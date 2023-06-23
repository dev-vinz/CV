import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { CardComponent } from './pages/card/card.component';

@NgModule({
  declarations: [ProjectsComponent, PreviewCardComponent, CardComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule, TranslocoModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}

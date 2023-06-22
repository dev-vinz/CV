import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

import { OrganizationsModule } from './pages/organizations/organizations.module';
import { ProjectsModule } from './pages/projects/projects.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, PortfolioRoutingModule, TranslocoModule],
})
export class PortfolioModule {}

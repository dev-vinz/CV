import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  {
    path: 'organizations',
    loadChildren: () =>
      import('./pages/organizations/organizations-routing.module').then(
        (m) => m.OrganizationsRoutingModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/projects-routing.module').then(
        (m) => m.ProjectsRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}

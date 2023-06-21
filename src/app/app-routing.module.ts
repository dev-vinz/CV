import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'organizations',
    loadChildren: () =>
      import('./features/organizations/organizations-routing.module').then(
        (m) => m.OrganizationsRoutingModule
      ),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./features/portfolio/portfolio-routing.module').then(
        (m) => m.PortfolioRoutingModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects-routing.module').then(
        (m) => m.ProjectsRoutingModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

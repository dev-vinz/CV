import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './pages/card/card.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/portfolio' },
  { path: ':name', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}

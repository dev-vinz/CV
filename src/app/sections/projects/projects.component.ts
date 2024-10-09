import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [provideTranslocoScope({ scope: 'projects', alias: 'p' })],
})
export class ProjectsComponent {}

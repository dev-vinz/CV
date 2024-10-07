import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
  providers: [provideTranslocoScope({ scope: 'training', alias: 't' })],
})
export class TrainingComponent {}

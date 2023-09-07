import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { Repository } from 'src/app/core/api/github/models/final/Repository';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
})
export class PreviewCardComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  @Input() repository!: Repository;

  private _backgroundImage!: string;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    const fileImage = `/assets/images/projects/${this.repository.name.toLowerCase()}.png`;
    const defaultImage = '/assets/images/projects/default.png';

    try {
      await lastValueFrom(this.http.get(fileImage, { responseType: 'text' }));
      this._backgroundImage = fileImage;
    } catch (error) {
      this._backgroundImage = defaultImage;
    }
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get backgroundImage(): string {
    return this._backgroundImage;
  }

  public get url(): string {
    return `projects/${this.repository.name.toLowerCase()}`;
  }
}

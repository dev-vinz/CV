import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/core/api/github/models/final/Organization';

import { Repository } from 'src/app/core/api/github/models/final/Repository';
import { GithubService } from 'src/app/core/api/github/services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _repositories: Repository[] = [];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private service: GithubService) {}

  async ngOnInit(): Promise<void> {
    const tabUrls = await this.service.user.getReposApiUrl(true);

    tabUrls.forEach(async (url) => {
      const repository = await this.service.repositories.getByUrl(url);

      this._repositories.push(repository);
      this._repositories = this._repositories.sort((r1, r2) =>
        r1.name.toUpperCase().localeCompare(r2.name.toUpperCase())
      );
    });
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get repositories(): Repository[] {
    return this._repositories;
  }
}

import { Component, OnInit } from '@angular/core';

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
    const owner = await this.service.user.get();
    const tabUrls = await this.service.repositories.allApiUrls();

    tabUrls.forEach(async (url) => {
      const repository = await this.service.repositories.getByUrl(url);

      this._repositories.push(repository);
      this._repositories.sort((r1, r2) =>
        r1.name.toUpperCase().localeCompare(r2.name.toUpperCase())
      );

      this._repositories = this._repositories.filter(
        (r, index, self) =>
          index ===
          self.findIndex(
            (r2) =>
              (r2.name === r.name && r2.owner.id !== owner.id) ||
              r2.name === r.name
          )
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

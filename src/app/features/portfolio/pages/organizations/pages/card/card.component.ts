import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Organization } from 'src/app/core/api/github/models/final/Organization';
import { Repository } from 'src/app/core/api/github/models/final/Repository';
import { GithubService } from 'src/app/core/api/github/services/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _loading: boolean = true;
  private _organization?: Organization;
  private _repositories: Repository[] = [];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private route: ActivatedRoute, private service: GithubService) {}

  async ngOnInit(): Promise<void> {
    const organizationName = this.route.snapshot.params['name'];
    const validNames = (await this.service.organizations.allNames()).map(
      (name) => name.toLowerCase()
    );

    if (validNames.includes(organizationName)) {
      this._organization = await this.service.organizations.get(
        organizationName
      );
    }

    this._loading = false;

    if (this._organization) {
      const repoIds = await this.service.repositories.allIds(false, true);

      repoIds.forEach(async (id) => {
        const repo = await this.service.repositories.getById(id);

        this._repositories.push(repo);
        this._repositories.sort((r1, r2) =>
          r1.name.toUpperCase().localeCompare(r2.name.toUpperCase())
        );
      });
    }
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get loading(): boolean {
    return this._loading;
  }

  public get organization(): Organization | undefined {
    return this._organization;
  }

  public get repositories(): Repository[] {
    return this._repositories;
  }
}

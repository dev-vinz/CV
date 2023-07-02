import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Organization } from 'src/app/core/api/github/models/final/Organization';
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
  private _organization!: Organization;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private route: ActivatedRoute, private service: GithubService) {}

  async ngOnInit(): Promise<void> {
    const organizationName = this.route.snapshot.params['name'];
    const owner = await this.service.user.get();
    const validNames = (await this.service.organizations.allNames()).map(
      (name) => name.toLowerCase()
    );

    if (validNames.includes(organizationName)) {
      this._organization = await this.service.organizations.get(
        organizationName
      );
    }

    this._loading = false;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  get loading(): boolean {
    return this._loading;
  }

  get organization(): Organization {
    return this._organization;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private _repository!: Repository;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private route: ActivatedRoute, private service: GithubService) {}

  async ngOnInit(): Promise<void> {
    const projectName = this.route.snapshot.params['name'];
    const owner = await this.service.user.get();
    const validNames = (await this.service.user.getReposNames(true)).map(
      (name) => name.toLowerCase()
    );

    if (validNames.includes(projectName)) {
      this._repository = await this.service.repositories.getByName(
        owner.username,
        projectName
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

  public get loading(): boolean {
    return this._loading;
  }

  public get repository(): Repository {
    return this._repository;
  }
}

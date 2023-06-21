import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNumber } from '@ngneat/transloco';

import { Repository } from 'src/app/core/api/github/models/final/Repository';
import { GithubService } from 'src/app/core/api/github/services/github.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _repository!: Repository;
  private _loading: boolean = true;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private route: ActivatedRoute, private service: GithubService) {}

  async ngOnInit(): Promise<void> {
    const projectId = +this.route.snapshot.params['id'];
    const validIds = await this.service.user.getReposIds();

    if (!isNaN(projectId) && validIds.includes(projectId)) {
      this._repository = await this.service.repositories.getById(projectId);
    }

    this._loading = false;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get repository(): Repository {
    return this._repository;
  }

  public get loading(): boolean {
    return this._loading;
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { GithubRequests } from './GithubRequests';

import { Repository } from '../models/final/Repository';
import { GithubRepository } from '../models/native/GithubRepository';

export class RepositoryRequests extends GithubRequests {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(http: HttpClient, apiUrl: string, authHeader: HttpHeaders) {
    super(http, apiUrl, authHeader);
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /**
   * Gets the user's repositories.
   */
  public async all(): Promise<Repository[]> {
    const url: string = `${this.apiUrl}/user/repos`;
    const options = { headers: this.authHeader };

    const repos = await lastValueFrom(
      this.http.get<GithubRepository[]>(url, options)
    );

    const parsedRepos: Repository[] = [];

    repos.forEach(async (repo) => {
      parsedRepos.push(await this.formatRepository(repo));
    });

    return parsedRepos;
  }
}

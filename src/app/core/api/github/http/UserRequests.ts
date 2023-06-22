import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GithubRequests } from './GithubRequests';

import { User } from '../models/final/User';
import { GithubRepository } from '../models/native/GithubRepository';
import { GithubUser } from '../models/native/GithubUser';

export class UserRequests extends GithubRequests {
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
   * Gets the user.
   * @returns The user.
   */
  public async get(): Promise<User> {
    const url: string = `${this.apiUrl}/user`;
    const options = { headers: this.authHeader };

    const user = await lastValueFrom(this.http.get<GithubUser>(url, options));

    return this.formatUser(user);
  }

  /**
   * Gets the user's repositories' api urls.
   * @param owns Whether to get the user's repositories or the user's owned repositories.
   * @returns The user's repositories' urls.
   */
  public async getReposApiUrl(
    owns: boolean = false,
    orgs: boolean = false
  ): Promise<string[]> {
    const url: string = `${this.apiUrl}/user/repos`;
    const options = { headers: this.authHeader };

    const user = await this.get();
    const repos = await lastValueFrom(
      this.http.get<GithubRepository[]>(url, options)
    );

    return repos
      .filter((repo) => (owns ? repo.owner.id === user.id : true))
      .filter((repo) => (orgs ? repo.owner.id !== user.id : true))
      .filter((repo) => repo.name !== user.username)
      .sort((r1, r2) =>
        r1.name.toUpperCase().localeCompare(r2.name.toUpperCase())
      )
      .map((repo) => repo.url);
  }

  /**
   * Gets the user's repositories' ids.
   * @param owns Whether to get the user's repositories or the user's owned repositories.
   * @param orgs Whether to get the user's repositories or the user's organizations' repositories.
   * @returns The user's repositories' ids.
   */
  public async getReposIds(
    owns: boolean = false,
    orgs: boolean = false
  ): Promise<number[]> {
    const url: string = `${this.apiUrl}/user/repos`;
    const options = { headers: this.authHeader };

    const user = await this.get();
    const repos = await lastValueFrom(
      this.http.get<GithubRepository[]>(url, options)
    );

    return repos
      .filter((repo) => (owns ? repo.owner.id === user.id : true))
      .filter((repo) => (orgs ? repo.owner.id !== user.id : true))
      .filter((repo) => repo.name !== user.username)
      .map((repo) => repo.id);
  }

  /**
   * Gets the user's repositories' names.
   * @param owns Whether to get the user's repositories or the user's owned repositories.
   * @param orgs Whether to get the user's repositories or the user's organizations' repositories.
   * @returns The user's repositories' names.
   */
  public async getReposNames(owns: boolean = false, orgs: boolean = false) {
    const url: string = `${this.apiUrl}/user/repos`;
    const options = { headers: this.authHeader };

    const user = await this.get();
    const repos = await lastValueFrom(
      this.http.get<GithubRepository[]>(url, options)
    );

    return repos
      .filter((repo) => (owns ? repo.owner.id === user.id : true))
      .filter((repo) => (orgs ? repo.owner.id !== user.id : true))
      .filter((repo) => repo.name !== user.username)
      .map((repo) => repo.name);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { GithubRequests } from './GithubRequests';

import { Repository } from '../models/final/Repository';
import { GithubRepository } from '../models/native/GithubRepository';
import { UserRequests } from './UserRequests';

export class RepositoryRequests extends GithubRequests {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private userRequests: UserRequests;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(http: HttpClient, apiUrl: string, authHeader: HttpHeaders) {
    super(http, apiUrl, authHeader);

    this.userRequests = new UserRequests(http, apiUrl, authHeader);
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /**
   * Gets the user's repositories' api urls.
   * @param ownerOnly Whether to get the user's repositories or the user's owned repositories.
   * @param orgsOnly Whether to get the user's repositories or the user's owned repositories.
   * @returns The user's repositories' urls.
   */
  public async allApiUrls(
    ownerOnly: boolean = false,
    orgsOnly: boolean = false
  ): Promise<string[]> {
    if (ownerOnly && orgsOnly) {
      throw new Error(
        "Cannot get both the user's repositories and the user's owned repositories."
      );
    }

    const url: string = `${this.apiUrl}/user/repos`;
    const options = { headers: this.authHeader };

    const user = await this.userRequests.get();
    const repos = await lastValueFrom(
      this.http.get<GithubRepository[]>(url, options)
    );

    return repos
      .filter((repo) => (ownerOnly ? repo.owner.id === user.id : true))
      .filter((repo) => (orgsOnly ? repo.owner.id !== user.id : true))
      .filter((repo) => repo.name !== user.username)
      .sort((r1, r2) =>
        r1.name.toUpperCase().localeCompare(r2.name.toUpperCase())
      )
      .map((repo) => repo.url);
  }

  /**
   * Gets the user's repositories' ids.
   * @param ownerOnly Whether to get the user's repositories or the user's owned repositories.
   * @param orgsOnly Whether to get the user's repositories or the user's owned repositories.
   * @returns The user's repositories' ids.
   */
  public async allIds(
    ownerOnly: boolean = false,
    orgsOnly: boolean = false
  ): Promise<number[]> {
    if (ownerOnly && orgsOnly) {
      throw new Error(
        "Cannot get both the user's repositories and the user's owned repositories."
      );
    }

    const url: string = `${this.apiUrl}/user/repos`;
    const options = { headers: this.authHeader };

    const user = await this.userRequests.get();
    const repos = await lastValueFrom(
      this.http.get<GithubRepository[]>(url, options)
    );

    return repos
      .filter((repo) => (ownerOnly ? repo.owner.id === user.id : true))
      .filter((repo) => (orgsOnly ? repo.owner.id !== user.id : true))
      .filter((repo) => repo.name !== user.username)
      .sort((r1, r2) =>
        r1.name.toUpperCase().localeCompare(r2.name.toUpperCase())
      )
      .map((repo) => repo.id);
  }

  /**
   * Gets the user's repositories' names.
   * @param ownerOnly Whether to get the user's repositories or the user's owned repositories.
   * @param orgsOnly Whether to get the user's repositories or the user's owned repositories.
   * @returns The user's repositories' names.
   */
  public async allNames(ownerOnly: boolean = false, orgsOnly: boolean = false) {
    if (ownerOnly && orgsOnly) {
      throw new Error(
        "Cannot get both the user's repositories and the user's owned repositories."
      );
    }

    const url: string = `${this.apiUrl}/user/repos`;
    const options = { headers: this.authHeader };

    const user = await this.userRequests.get();
    const repos = await lastValueFrom(
      this.http.get<GithubRepository[]>(url, options)
    );

    return repos
      .filter((repo) => (ownerOnly ? repo.owner.id === user.id : true))
      .filter((repo) => (orgsOnly ? repo.owner.id !== user.id : true))
      .filter((repo) => repo.name !== user.username)
      .sort((r1, r2) =>
        r1.name.toUpperCase().localeCompare(r2.name.toUpperCase())
      )
      .map((repo) => repo.name);
  }

  /**
   * Gets the repository with the given id.
   * @param id The id of the repository.
   * @returns The repository.
   * @throws An error if the repository does not exist.
   */
  public async getById(id: number): Promise<Repository> {
    const url: string = `${this.apiUrl}/repositories/${id}`;
    const options = { headers: this.authHeader };

    const repo = await lastValueFrom(
      this.http.get<GithubRepository>(url, options)
    );

    return await this.formatRepository(repo);
  }

  /**
   * Gets the repository with the given name.
   * @param owner The owner of the repository.
   * @param name The name of the repository.
   * @returns The repository.
   * @throws An error if the repository does not exist.
   */
  public async getByName(owner: string, name: string): Promise<Repository> {
    const url: string = `${this.apiUrl}/repos/${owner}/${name}`;
    const options = { headers: this.authHeader };

    const repo = await lastValueFrom(
      this.http.get<GithubRepository>(url, options)
    );

    return await this.formatRepository(repo);
  }

  /**
   * Gets the repository from the given url.
   * @param url The url of the repository.
   * @returns The repository.
   * @throws An error if the repository does not exist.
   */
  public async getByUrl(url: string): Promise<Repository> {
    const options = { headers: this.authHeader };

    const repo = await lastValueFrom(
      this.http.get<GithubRepository>(url, options)
    );

    return await this.formatRepository(repo);
  }
}

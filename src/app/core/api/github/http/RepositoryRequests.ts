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

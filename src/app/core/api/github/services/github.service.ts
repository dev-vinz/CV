import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { OrganizationRequests } from '../http/OrganizationRequests';
import { RepositoryRequests } from '../http/RepositoryRequests';
import { UserRequests } from '../http/UserRequests';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private static BASE_API_URL: string = 'https://api.github.com';
  private static AUTHORIZATION_HEADER: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${environment.TOKEN_GITHUB_API}`,
  });

  private _organizationsRequests: OrganizationRequests;
  private _repositoriesRequests: RepositoryRequests;
  private _userRequests: UserRequests;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(http: HttpClient) {
    this._organizationsRequests = new OrganizationRequests(
      http,
      GithubService.BASE_API_URL,
      GithubService.AUTHORIZATION_HEADER
    );

    this._repositoriesRequests = new RepositoryRequests(
      http,
      GithubService.BASE_API_URL,
      GithubService.AUTHORIZATION_HEADER
    );

    this._userRequests = new UserRequests(
      http,
      GithubService.BASE_API_URL,
      GithubService.AUTHORIZATION_HEADER
    );
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get organizations(): OrganizationRequests {
    return this._organizationsRequests;
  }

  public get repositories(): RepositoryRequests {
    return this._repositoriesRequests;
  }

  public get user(): UserRequests {
    return this._userRequests;
  }
}

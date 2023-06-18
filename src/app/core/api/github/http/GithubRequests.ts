import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

import { Language } from '../models/final/Language';
import { Organization } from '../models/final/Organization';
import { Repository } from '../models/final/Repository';
import { User } from '../models/final/User';

import { GithubOrganization } from '../models/native/GithubOrganization';
import { GithubRepository } from '../models/native/GithubRepository';
import { GithubUser } from '../models/native/GithubUser';
import { lastValueFrom } from 'rxjs';

export class GithubRequests {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _http: HttpClient;
  private _apiUrl: string;
  private _authHeader: HttpHeaders;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(http: HttpClient, apiUrl: string, authHeader: HttpHeaders) {
    this._http = http;
    this._apiUrl = apiUrl;
    this._authHeader = authHeader;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROTECTED                          *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  protected formatOrganization(org: GithubOrganization): Organization {
    return new Organization(
      org.name,
      org.login,
      org.avatar_url,
      org.html_url,
      org.description,
      org.location,
      org.email,
      org.blog,
      moment(org.created_at),
      moment(org.updated_at)
    );
  }

  protected async formatRepository(
    repo: GithubRepository
  ): Promise<Repository> {
    // Gets the languages of the repository from GitHub
    const githubLanguages = await lastValueFrom(
      this._http.get<Record<string, number>>(repo.languages_url, {
        headers: this._authHeader,
      })
    );

    // Format languages
    const total = Object.values(githubLanguages).reduce((a, b) => a + b, 0);
    const languages: Language[] = Object.entries(githubLanguages).map(
      ([key, value]) => new Language(key, value, total)
    );

    return new Repository(
      repo.name,
      repo.description,
      languages,
      repo.html_url,
      repo.topics,
      moment(repo.created_at),
      moment(repo.updated_at),
      moment(repo.pushed_at)
    );
  }

  protected formatUser(user: GithubUser): User {
    return new User(
      user.name,
      user.login,
      user.avatarUrl,
      user.htmlUrl,
      user.bio,
      user.location,
      user.email,
      user.blog,
      moment(user.createdAt),
      moment(user.updatedAt)
    );
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  protected get http(): HttpClient {
    return this._http;
  }

  protected get apiUrl(): string {
    return this._apiUrl;
  }

  protected get authHeader(): HttpHeaders {
    return this._authHeader;
  }
}

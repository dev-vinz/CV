import { Organization } from './../models/Organization';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, firstValueFrom, lastValueFrom, map } from 'rxjs';

import { User } from '../models/User';
import { Repository } from '../models/Repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private BASE_API_URL: string = 'https://api.github.com';
  private AUTHORIZATION_HEADER: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${environment.GITHUB_API_TOKEN}`,
  });

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(private http: HttpClient) {}

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /**
   * Gets the organizations that the user is a member of.
   */
  public async organizations(): Promise<Organization[]> {
    return await lastValueFrom(
      this.http
        .get<Organization[]>(`${this.BASE_API_URL}/user/orgs`, {
          headers: this.AUTHORIZATION_HEADER,
        })
        .pipe()
    );
  }

  /**
   * Gets the user's profile.
   */
  public async user(): Promise<User> {
    return await lastValueFrom(
      this.http
        .get<User>(`${this.BASE_API_URL}/user`, {
          headers: this.AUTHORIZATION_HEADER,
        })
        .pipe()
    );
  }

  /**
   * Gets the user's repositories.
   */
  public async repositories(): Promise<Repository[]> {
    return await lastValueFrom(
      this.http
        .get<Repository[]>(`${this.BASE_API_URL}/user/repos`, {
          headers: this.AUTHORIZATION_HEADER,
        })
        .pipe()
    );
  }
}

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
}

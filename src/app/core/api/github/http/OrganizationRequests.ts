import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { GithubRequests } from './GithubRequests';

import { Organization } from '../models/final/Organization';
import { GithubOrganization } from '../models/native/GithubOrganization';

export class OrganizationRequests extends GithubRequests {
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
   * Gets the organizations that the user is a member of.
   */
  public async all(): Promise<Organization[]> {
    const url: string = `${this.apiUrl}/user/orgs`;
    const options = { headers: this.authHeader };

    const orgs = await lastValueFrom(
      this.http.get<GithubOrganization[]>(url, options)
    );

    const parsedOrgs: Organization[] = [];

    orgs.forEach(async (org) => {
      parsedOrgs.push(await this.formatOrganization(org));
    });

    return parsedOrgs;
  }

  /**
   * Gets the organization with the given name.
   * @param orgName The name of the organization.
   * @returns The organization.
   * @throws An error if the organization does not exist.
   */
  public async get(orgName: string): Promise<Organization> {
    const url: string = `${this.apiUrl}/orgs/${orgName}`;
    const options = { headers: this.authHeader };

    const org = await lastValueFrom(
      this.http.get<GithubOrganization>(url, options)
    );

    return this.formatOrganization(org);
  }
}

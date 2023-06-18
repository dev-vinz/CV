export class GithubOrganization {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _login: string;
  private _id: number;
  private _node_id: string;
  private _url: string;
  private _repos_url: string;
  private _events_url: string;
  private _hooks_url: string;
  private _issues_url: string;
  private _members_url: string;
  private _public_members_url: string;
  private _avatar_url: string;
  private _description: string;
  private _name: string;
  private _company: string;
  private _blog: string;
  private _location: string;
  private _email: string;
  private _twitter_username: string;
  private _is_verified: boolean;
  private _has_organization_projects: boolean;
  private _has_repository_projects: boolean;
  private _public_repos: number;
  private _public_gists: number;
  private _followers: number;
  private _following: number;
  private _html_url: string;
  private _created_at: Date;
  private _updated_at: Date;
  private _type: string;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    login: string,
    id: number,
    node_id: string,
    url: string,
    repos_url: string,
    events_url: string,
    hooks_url: string,
    issues_url: string,
    members_url: string,
    public_members_url: string,
    avatar_url: string,
    description: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    twitter_username: string,
    is_verified: boolean,
    has_organization_projects: boolean,
    has_repository_projects: boolean,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    html_url: string,
    created_at: Date,
    updated_at: Date,
    type: string
  ) {
    this._login = login;
    this._id = id;
    this._node_id = node_id;
    this._url = url;
    this._repos_url = repos_url;
    this._events_url = events_url;
    this._hooks_url = hooks_url;
    this._issues_url = issues_url;
    this._members_url = members_url;
    this._public_members_url = public_members_url;
    this._avatar_url = avatar_url;
    this._description = description;
    this._name = name;
    this._company = company;
    this._blog = blog;
    this._location = location;
    this._email = email;
    this._twitter_username = twitter_username;
    this._is_verified = is_verified;
    this._has_organization_projects = has_organization_projects;
    this._has_repository_projects = has_repository_projects;
    this._public_repos = public_repos;
    this._public_gists = public_gists;
    this._followers = followers;
    this._following = following;
    this._html_url = html_url;
    this._created_at = created_at;
    this._updated_at = updated_at;
    this._type = type;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get login(): string {
    return this._login;
  }
  public get id(): number {
    return this._id;
  }
  public get node_id(): string {
    return this._node_id;
  }
  public get url(): string {
    return this._url;
  }
  public get repos_url(): string {
    return this._repos_url;
  }
  public get events_url(): string {
    return this._events_url;
  }
  public get hooks_url(): string {
    return this._hooks_url;
  }
  public get issues_url(): string {
    return this._issues_url;
  }
  public get members_url(): string {
    return this._members_url;
  }
  public get public_members_url(): string {
    return this._public_members_url;
  }
  public get avatar_url(): string {
    return this._avatar_url;
  }
  public get description(): string {
    return this._description;
  }

  public get name(): string {
    return this._name;
  }

  public get company(): string {
    return this._company;
  }

  public get blog(): string {
    return this._blog;
  }

  public get location(): string {
    return this._location;
  }

  public get email(): string {
    return this._email;
  }

  public get twitter_username(): string {
    return this._twitter_username;
  }

  public get is_verified(): boolean {
    return this._is_verified;
  }

  public get has_organization_projects(): boolean {
    return this._has_organization_projects;
  }

  public get has_repository_projects(): boolean {
    return this._has_repository_projects;
  }

  public get public_repos(): number {
    return this._public_repos;
  }

  public get public_gists(): number {
    return this._public_gists;
  }

  public get followers(): number {
    return this._followers;
  }

  public get following(): number {
    return this._following;
  }

  public get html_url(): string {
    return this._html_url;
  }

  public get created_at(): Date {
    return this._created_at;
  }

  public get updated_at(): Date {
    return this._updated_at;
  }

  public get type(): string {
    return this._type;
  }
}

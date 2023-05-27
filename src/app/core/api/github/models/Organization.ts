export class Organization {
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
    description: string
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
}

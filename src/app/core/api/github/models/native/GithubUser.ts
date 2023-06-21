export class GithubUser {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _login: string;
  private _id: number;
  private _node_id: string;
  private _avatar_url: string;
  private _gravatar_id: string;
  private _url: string;
  private _html_url: string;
  private _followers_url: string;
  private _following_url: string;
  private _gists_url: string;
  private _starred_url: string;
  private _subscriptions_url: string;
  private _organizations_url: string;
  private _repos_url: string;
  private _events_url: string;
  private _received_events_url: string;
  private _type: string;
  private _site_admin: boolean;
  private _name: string;
  private _company: string;
  private _blog: string;
  private _location: string;
  private _email: string;
  private _hireable: boolean;
  private _bio: string;
  private _twitter_username: string;
  private _public_repos: number;
  private _public_gists: number;
  private _followers: number;
  private _following: number;
  private _created_at: Date;
  private _updated_at: Date;
  private _private_gists: number;
  private _total_private_repos: number;
  private _owned_private_repos: number;
  private _disk_usage: number;
  private _collaborators: number;
  private _two_factor_authentication: boolean;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: boolean,
    bio: string,
    twitter_username: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: Date,
    updated_at: Date,
    private_gists: number,
    total_private_repos: number,
    owned_private_repos: number,
    disk_usage: number,
    collaborators: number,
    two_factor_authentication: boolean
  ) {
    this._login = login;
    this._id = id;
    this._node_id = node_id;
    this._avatar_url = avatar_url;
    this._gravatar_id = gravatar_id;
    this._url = url;
    this._html_url = html_url;
    this._followers_url = followers_url;
    this._following_url = following_url;
    this._gists_url = gists_url;
    this._starred_url = starred_url;
    this._subscriptions_url = subscriptions_url;
    this._organizations_url = organizations_url;
    this._repos_url = repos_url;
    this._events_url = events_url;
    this._received_events_url = received_events_url;
    this._type = type;
    this._site_admin = site_admin;
    this._name = name;
    this._company = company;
    this._blog = blog;
    this._location = location;
    this._email = email;
    this._hireable = hireable;
    this._bio = bio;
    this._twitter_username = twitter_username;
    this._public_repos = public_repos;
    this._public_gists = public_gists;
    this._followers = followers;
    this._following = following;
    this._created_at = created_at;
    this._updated_at = updated_at;
    this._private_gists = private_gists;
    this._total_private_repos = total_private_repos;
    this._owned_private_repos = owned_private_repos;
    this._disk_usage = disk_usage;
    this._collaborators = collaborators;
    this._two_factor_authentication = two_factor_authentication;
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

  public get avatar_url(): string {
    return this._avatar_url;
  }

  public get gravatar_id(): string {
    return this._gravatar_id;
  }

  public get url(): string {
    return this._url;
  }

  public get html_url(): string {
    return this._html_url;
  }

  public get followers_url(): string {
    return this._followers_url;
  }

  public get following_url(): string {
    return this._following_url;
  }

  public get gists_url(): string {
    return this._gists_url;
  }

  public get starred_url(): string {
    return this._starred_url;
  }

  public get subscriptions_url(): string {
    return this._subscriptions_url;
  }

  public get organizations_url(): string {
    return this._organizations_url;
  }

  public get repos_url(): string {
    return this._repos_url;
  }

  public get events_url(): string {
    return this._events_url;
  }

  public get received_events_url(): string {
    return this._received_events_url;
  }

  public get type(): string {
    return this._type;
  }

  public get site_admin(): boolean {
    return this._site_admin;
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

  public get hireable(): boolean {
    return this._hireable;
  }

  public get bio(): string {
    return this._bio;
  }

  public get twitter_username(): string {
    return this._twitter_username;
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

  public get created_at(): Date {
    return this._created_at;
  }

  public get updated_at(): Date {
    return this._updated_at;
  }

  public get private_gists(): number {
    return this._private_gists;
  }

  public get total_private_repos(): number {
    return this._total_private_repos;
  }

  public get owned_private_repos(): number {
    return this._owned_private_repos;
  }

  public get disk_usage(): number {
    return this._disk_usage;
  }

  public get collaborators(): number {
    return this._collaborators;
  }

  public get two_factor_authentication(): boolean {
    return this._two_factor_authentication;
  }
}

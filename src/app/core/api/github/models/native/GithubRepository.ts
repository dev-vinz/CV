import { GithubUser } from './GithubUser';

export class GithubRepository {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _id: number;
  private _node_id: string;
  private _name: string;
  private _full_name: string;
  private _html_url: string;
  private _description: string;
  private _owner: GithubUser;
  private _fork: boolean;
  private _url: string;
  private _forks_url: string;
  private _keys_url: string;
  private _collaborators_url: string;
  private _teams_url: string;
  private _hooks_url: string;
  private _issue_events_url: string;
  private _events_url: string;
  private _assignees_url: string;
  private _branches_url: string;
  private _tags_url: string;
  private _blobs_url: string;
  private _git_tags_url: string;
  private _git_refs_url: string;
  private _trees_url: string;
  private _statuses_url: string;
  private _languages_url: string;
  private _stargazers_url: string;
  private _contributors_url: string;
  private _subscribers_url: string;
  private _subscription_url: string;
  private _commits_url: string;
  private _git_commits_url: string;
  private _comments_url: string;
  private _issue_comment_url: string;
  private _contents_url: string;
  private _compare_url: string;
  private _merges_url: string;
  private _archive_url: string;
  private _downloads_url: string;
  private _issues_url: string;
  private _pulls_url: string;
  private _milestones_url: string;
  private _notifications_url: string;
  private _labels_url: string;
  private _releases_url: string;
  private _deployments_url: string;
  private _created_at: Date;
  private _updated_at: Date;
  private _pushed_at: Date;
  private _git_url: string;
  private _ssh_url: string;
  private _clone_url: string;
  private _svn_url: string;
  private _homepage: string;
  private _size: number;
  private _stargazers_count: number;
  private _watchers_count: number;
  private _language: string;
  private _has_issues: boolean;
  private _has_projects: boolean;
  private _has_downloads: boolean;
  private _has_wiki: boolean;
  private _has_pages: boolean;
  private _forks_count: number;
  private _mirror_url: string;
  private _archived: boolean;
  private _disabled: boolean;
  private _open_issues_count: number;
  private _license: string;
  private _forks: number;
  private _open_issues: number;
  private _watchers: number;
  private _default_branch: string;
  private _topics: string[];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    html_url: string,
    description: string,
    owner: GithubUser,
    fork: boolean,
    url: string,
    forks_url: string,
    keys_url: string,
    collaborators_url: string,
    teams_url: string,
    hooks_url: string,
    issue_events_url: string,
    events_url: string,
    assignees_url: string,
    branches_url: string,
    tags_url: string,
    blobs_url: string,
    git_tags_url: string,
    git_refs_url: string,
    trees_url: string,
    statuses_url: string,
    languages_url: string,
    stargazers_url: string,
    contributors_url: string,
    subscribers_url: string,
    subscription_url: string,
    commits_url: string,
    git_commits_url: string,
    comments_url: string,
    issue_comment_url: string,
    contents_url: string,
    compare_url: string,
    merges_url: string,
    archive_url: string,
    downloads_url: string,
    issues_url: string,
    pulls_url: string,
    milestones_url: string,
    notifications_url: string,
    labels_url: string,
    releases_url: string,
    deployments_url: string,
    created_at: Date,
    updated_at: Date,
    pushed_at: Date,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    svn_url: string,
    homepage: string,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    language: string,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    forks_count: number,
    mirror_url: string,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string,
    topics: string[]
  ) {
    this._id = id;
    this._node_id = node_id;
    this._name = name;
    this._full_name = full_name;
    this._html_url = html_url;
    this._description = description;
    this._owner = owner;
    this._fork = fork;
    this._url = url;
    this._forks_url = forks_url;
    this._keys_url = keys_url;
    this._collaborators_url = collaborators_url;
    this._teams_url = teams_url;
    this._hooks_url = hooks_url;
    this._issue_events_url = issue_events_url;
    this._events_url = events_url;
    this._assignees_url = assignees_url;
    this._branches_url = branches_url;
    this._tags_url = tags_url;
    this._blobs_url = blobs_url;
    this._git_tags_url = git_tags_url;
    this._git_refs_url = git_refs_url;
    this._trees_url = trees_url;
    this._statuses_url = statuses_url;
    this._languages_url = languages_url;
    this._stargazers_url = stargazers_url;
    this._contributors_url = contributors_url;
    this._subscribers_url = subscribers_url;
    this._subscription_url = subscription_url;
    this._commits_url = commits_url;
    this._git_commits_url = git_commits_url;
    this._comments_url = comments_url;
    this._issue_comment_url = issue_comment_url;
    this._contents_url = contents_url;
    this._compare_url = compare_url;
    this._merges_url = merges_url;
    this._archive_url = archive_url;
    this._downloads_url = downloads_url;
    this._issues_url = issues_url;
    this._pulls_url = pulls_url;
    this._milestones_url = milestones_url;
    this._notifications_url = notifications_url;
    this._labels_url = labels_url;
    this._releases_url = releases_url;
    this._deployments_url = deployments_url;
    this._created_at = created_at;
    this._updated_at = updated_at;
    this._pushed_at = pushed_at;
    this._git_url = git_url;
    this._ssh_url = ssh_url;
    this._clone_url = clone_url;
    this._svn_url = svn_url;
    this._homepage = homepage;
    this._size = size;
    this._stargazers_count = stargazers_count;
    this._watchers_count = watchers_count;
    this._language = language;
    this._has_issues = has_issues;
    this._has_projects = has_projects;
    this._has_downloads = has_downloads;
    this._has_wiki = has_wiki;
    this._has_pages = has_pages;
    this._forks_count = forks_count;
    this._mirror_url = mirror_url;
    this._archived = archived;
    this._disabled = disabled;
    this._open_issues_count = open_issues_count;
    this._license = license;
    this._forks = forks;
    this._open_issues = open_issues;
    this._watchers = watchers;
    this._default_branch = default_branch;
    this._topics = topics;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get id(): number {
    return this._id;
  }

  public get node_id(): string {
    return this._node_id;
  }

  public get name(): string {
    return this._name;
  }

  public get full_name(): string {
    return this._full_name;
  }

  public get html_url(): string {
    return this._html_url;
  }

  public get description(): string {
    return this._description;
  }

  public get owner(): GithubUser {
    return this._owner;
  }

  public get fork(): boolean {
    return this._fork;
  }

  public get url(): string {
    return this._url;
  }

  public get forks_url(): string {
    return this._forks_url;
  }

  public get keys_url(): string {
    return this._keys_url;
  }

  public get collaborators_url(): string {
    return this._collaborators_url;
  }

  public get teams_url(): string {
    return this._teams_url;
  }

  public get hooks_url(): string {
    return this._hooks_url;
  }

  public get issue_events_url(): string {
    return this._issue_events_url;
  }

  public get events_url(): string {
    return this._events_url;
  }

  public get assignees_url(): string {
    return this._assignees_url;
  }

  public get branches_url(): string {
    return this._branches_url;
  }

  public get tags_url(): string {
    return this._tags_url;
  }

  public get blobs_url(): string {
    return this._blobs_url;
  }

  public get git_tags_url(): string {
    return this._git_tags_url;
  }

  public get git_refs_url(): string {
    return this._git_refs_url;
  }

  public get trees_url(): string {
    return this._trees_url;
  }

  public get statuses_url(): string {
    return this._statuses_url;
  }

  public get languages_url(): string {
    return this._languages_url;
  }

  public get stargazers_url(): string {
    return this._stargazers_url;
  }

  public get contributors_url(): string {
    return this._contributors_url;
  }

  public get subscribers_url(): string {
    return this._subscribers_url;
  }

  public get subscription_url(): string {
    return this._subscription_url;
  }

  public get commits_url(): string {
    return this._commits_url;
  }

  public get git_commits_url(): string {
    return this._git_commits_url;
  }

  public get comments_url(): string {
    return this._comments_url;
  }

  public get issue_comment_url(): string {
    return this._issue_comment_url;
  }

  public get contents_url(): string {
    return this._contents_url;
  }

  public get compare_url(): string {
    return this._compare_url;
  }

  public get merges_url(): string {
    return this._merges_url;
  }

  public get archive_url(): string {
    return this._archive_url;
  }

  public get downloads_url(): string {
    return this._downloads_url;
  }

  public get issues_url(): string {
    return this._issues_url;
  }

  public get pulls_url(): string {
    return this._pulls_url;
  }

  public get milestones_url(): string {
    return this._milestones_url;
  }

  public get notifications_url(): string {
    return this._notifications_url;
  }

  public get labels_url(): string {
    return this._labels_url;
  }

  public get releases_url(): string {
    return this._releases_url;
  }

  public get deployments_url(): string {
    return this._deployments_url;
  }

  public get created_at(): Date {
    return this._created_at;
  }

  public get updated_at(): Date {
    return this._updated_at;
  }

  public get pushed_at(): Date {
    return this._pushed_at;
  }

  public get git_url(): string {
    return this._git_url;
  }

  public get ssh_url(): string {
    return this._ssh_url;
  }

  public get clone_url(): string {
    return this._clone_url;
  }

  public get svn_url(): string {
    return this._svn_url;
  }

  public get homepage(): string {
    return this._homepage;
  }

  public get size(): number {
    return this._size;
  }

  public get stargazers_count(): number {
    return this._stargazers_count;
  }

  public get watchers_count(): number {
    return this._watchers_count;
  }

  public get language(): string {
    return this._language;
  }

  public get has_issues(): boolean {
    return this._has_issues;
  }

  public get has_projects(): boolean {
    return this._has_projects;
  }

  public get has_downloads(): boolean {
    return this._has_downloads;
  }

  public get has_wiki(): boolean {
    return this._has_wiki;
  }

  public get has_pages(): boolean {
    return this._has_pages;
  }

  public get forks_count(): number {
    return this._forks_count;
  }

  public get mirror_url(): string {
    return this._mirror_url;
  }

  public get archived(): boolean {
    return this._archived;
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  public get open_issues_count(): number {
    return this._open_issues_count;
  }

  public get license(): string {
    return this._license;
  }

  public get forks(): number {
    return this._forks;
  }

  public get open_issues(): number {
    return this._open_issues;
  }

  public get watchers(): number {
    return this._watchers;
  }

  public get default_branch(): string {
    return this._default_branch;
  }

  public get topics(): string[] {
    return this._topics;
  }
}

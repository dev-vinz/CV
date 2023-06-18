import { Moment } from 'moment';

export class Organization {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _name: string;
  private _username: string;
  private _avatarUrl: string;
  private _url: string;
  private _description: string;
  private _location: string;
  private _email: string;
  private _blog: string;
  private _createdAt: Moment;
  private _updatedAt: Moment;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    name: string,
    username: string,
    avatarUrl: string,
    url: string,
    description: string,
    location: string,
    email: string,
    blog: string,
    createdAt: Moment,
    updatedAt: Moment
  ) {
    this._name = name;
    this._username = username;
    this._avatarUrl = avatarUrl;
    this._url = url;
    this._description = description;
    this._location = location;
    this._email = email;
    this._blog = blog;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get name(): string {
    return this._name;
  }

  public get username(): string {
    return this._username;
  }

  public get avatarUrl(): string {
    return this._avatarUrl;
  }

  public get url(): string {
    return this._url;
  }

  public get description(): string {
    return this._description;
  }

  public get location(): string {
    return this._location;
  }

  public get email(): string {
    return this._email;
  }

  public get blog(): string {
    return this._blog;
  }

  public get createdAt(): Moment {
    return this._createdAt;
  }

  public get updatedAt(): Moment {
    return this._updatedAt;
  }
}

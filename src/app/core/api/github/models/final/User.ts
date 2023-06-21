import { Moment } from 'moment';

export class User {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _id: number;
  private _name: string;
  private _username: string;
  private _avatarUrl: string;
  private _url: string;
  private _bio: string;
  private _location: string;
  private _email: string;
  private _company: string;
  private _createdAt: Moment;
  private _updatedAt: Moment;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    id: number,
    name: string,
    username: string,
    avatarUrl: string,
    url: string,
    bio: string,
    location: string,
    email: string,
    company: string,
    createdAt: Moment,
    updatedAt: Moment
  ) {
    this._id = id;
    this._name = name;
    this._username = username;
    this._avatarUrl = avatarUrl;
    this._url = url;
    this._bio = bio;
    this._location = location;
    this._email = email;
    this._company = company;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
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

  public get bio(): string {
    return this._bio;
  }

  public get location(): string {
    return this._location;
  }

  public get email(): string {
    return this._email;
  }

  public get company(): string {
    return this._company;
  }

  public get createdAt(): Moment {
    return this._createdAt;
  }

  public get updatedAt(): Moment {
    return this._updatedAt;
  }
}

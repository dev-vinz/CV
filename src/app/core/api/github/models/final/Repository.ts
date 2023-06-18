import { Moment } from 'moment';

import { Language } from './Language';

export class Repository {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _name: string;
  private _description: string;
  private _languages: Language[];
  private _url: string;
  private _topics: string[];
  private _createdAt: Moment;
  private _updatedAt: Moment;
  private _pushedAt: Moment;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    name: string,
    description: string,
    languages: Language[],
    url: string,
    topics: string[],
    createdAt: Moment,
    updatedAt: Moment,
    pushedAt: Moment
  ) {
    this._name = name;
    this._description = description;
    this._languages = languages;
    this._url = url;
    this._topics = topics;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._pushedAt = pushedAt;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public getTopLanguage(): Language {
    return this._languages.reduce((prev, current) => {
      return prev.percentage > current.percentage ? prev : current;
    });
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get languages(): Language[] {
    return this._languages;
  }

  public get url(): string {
    return this._url;
  }

  public get topics(): string[] {
    return this._topics;
  }

  public get createdAt(): Moment {
    return this._createdAt;
  }

  public get updatedAt(): Moment {
    return this._updatedAt;
  }

  public get pushedAt(): Moment {
    return this._pushedAt;
  }
}

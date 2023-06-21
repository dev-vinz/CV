import { Moment } from 'moment';

import { Language } from './Language';
import { User } from './User';

export class Repository {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _id: number;
  private _name: string;
  private _description: string;
  private _owner: User;
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
    id: number,
    name: string,
    description: string,
    owner: User,
    languages: Language[],
    url: string,
    topics: string[],
    createdAt: Moment,
    updatedAt: Moment,
    pushedAt: Moment
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._owner = owner;
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
    }, new Language('', 0, 0));
  }

  public getTopLanguages(): Language[] {
    const topLang = this.getTopLanguage();
    const topLanguages: Language[] = [];

    this._languages.forEach((lang) => {
      if (lang.percentage > topLang.percentage / 2) {
        topLanguages.push(lang);
      }
    });

    return topLanguages;
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get owner(): User {
    return this._owner;
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

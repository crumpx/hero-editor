import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Http, Headers} from "@angular/http";
import {Hero} from "./hero";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  private heroesUrl = 'app/heroes';
  getHeroes(){
    // return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl).toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number){
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({'content-type': 'application/json'});

    return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(hero: Hero){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      .delete(url, {headers: headers})
      .toPromise()
      .catch(this.handleError);
  }

  save(hero: Hero): Promise<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }


}

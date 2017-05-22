import { Injectable } from '@angular/core';
import { FILMS } from './mock-data/mock-films';
import { Film } from './film';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class FilmsService {

  filmsInLib: Film[] = [];
  searchedFilms: Film[] = [];

  url = 'http://localhost:4711';

  constructor(private _router: Router, private _http: Http) {}

  // tested
  getNewFilms(): any {
    return this._http.get(this.url + '/api/films/').map(data => {
      return data.json();
    });
  }
  // tested
  getPopularFilms(): any {
    return this._http.get(this.url + '/api/films/').map(data => {
      return data.json();
    });
  }
  // tested
  getAlsoWatchedFilms() {
    return this._http.get(this.url + '/api/films/').map(data => {
      return data.json();
    });
  }
  // tested
  getFilmDetails(id): any {
    return this._http.get(this.url + '/api/films/' + id).map(data => {
      return data.json();
    });

  }

  // tested
  addToLib(film, remove) {

    if (remove) {
      const filmId = this._searchFilmInLib(film.id);
      if (filmId || filmId === 0) {
        this.filmsInLib.splice(filmId, 1);
        return;
      }
      return;
    }

    const _filmExist = this._searchFilmInLib(film.id);
    if (_filmExist || _filmExist === 0) {
      console.log('Film Exist, for remove sand "remove" option true!');
    } else {
      this.filmsInLib.push(film);
      console.log('FILMS.SERVICE :: FILM ADDED!!!');
    }
  }

  // tested
  _searchFilmInLib(filmId): any {
    for (let i = 0; i < this.filmsInLib.length; ++i) {
      if (this.filmsInLib[i].id === filmId) {
        return i;
      }
    }
  }

  // tested
  getFilmsFromLib(justNumber): any {
    if (justNumber) {
      return this.filmsInLib.length;
    }

    return this.filmsInLib;
  }

  // tested
  searchFilm(word): any {
    if (word === '' || this.searchedFilms.length !== 0) {
      this._router.navigateByUrl('/search');
      console.log('PLEAD WRITE SOME WORD!');
      this.searchedFilms = [];
      return;
    }

    this._http.get(this.url + '/api/films/search?q=' + word)
      .map(res => res.json())
      .subscribe(films => {
        this._router.navigateByUrl('/search');
        this.searchedFilms = films;
      });

  }

  // tested
  getSearchedFilms() {
    return this.searchedFilms;
  }

}

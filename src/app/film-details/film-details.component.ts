import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../films.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit {

    test = 'test';
    film: Film;
    i18n = {
        actors: 'Actors',
        details: 'Details',
        produsers: 'Produsers',
        director: 'Director',
        button: {
            watch: 'Watch Now',
            add: 'Add to Library',
            remove: 'Remove from Library'
        }
    };

  constructor(private _route: ActivatedRoute, private _filmService: FilmsService) {}

  ngOnInit() {
    this._route.params.subscribe(data => {
      this.getFilm(data);
    });
  }

  getFilm(id) {
    this._filmService.getFilmDetails(this._route.snapshot.params['id']).subscribe(film => {
      this.film = film;
    });
  }

  clickWatch() {
    console.log('Film-Details Click :: Watch');
  }
  clickAdd(film) {
    console.log('Film-Details Click :: Add');
    console.log(film);
    this._filmService.addToLib(film, false);
  }
  clickRemove(film, remove) {
    console.log('Film-Details Click :: Remove');
    console.log(film, remove);
    this._filmService.addToLib(film, true);
  }

}

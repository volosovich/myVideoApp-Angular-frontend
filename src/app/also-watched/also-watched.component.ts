import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmsService } from '../films.service';


// import { FilmDetailsComponent } from '../film-details/film-details.component';

@Component({
  selector: 'app-also-watched',
  templateUrl: './also-watched.component.html',
  styleUrls: ['./also-watched.component.css'],
  providers: [ FilmsService ],
})
export class AlsoWatchedComponent implements OnInit {

    title = 'Viewers also watched';

    films: Film[];

  constructor(private _filmsService: FilmsService,
              // private _filmDetails: FilmDetailsComponent
            ) {}

  ngOnInit() {
      this.getAlsoWatchedFilms();
  }

  getAlsoWatchedFilms() {
      this._filmsService.getAlsoWatchedFilms().subscribe(films => this.films = films);
  }

}

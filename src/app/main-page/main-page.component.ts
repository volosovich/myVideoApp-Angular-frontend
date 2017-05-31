import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmsService } from '../films.service';


// tmp
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [FilmsService]
})
export class MainPageComponent implements OnInit {

  titleNew = 'New Films';
  titlePopular = 'Popular';

  filmsNew: Film[];
  // filmsNew: Response;
  filmsPopular: Film[];

  constructor(private _filmsService: FilmsService) {};

  ngOnInit() {
      this.getNewFilms();
      this.getPopularFilms();
  }

  getNewFilms() {
      this._filmsService.getNewFilms().subscribe(films => this.filmsNew = films);
  }
  getPopularFilms() {
      this._filmsService.getPopularFilms().subscribe(films => this.filmsPopular = films);
  }


  clickFilm(element, someVar) {
      console.log(element, someVar);
  }

}

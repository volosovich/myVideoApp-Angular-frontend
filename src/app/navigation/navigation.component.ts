import { Component, OnInit } from '@angular/core';
import { Film } from '../film';

import { FilmsService } from '../films.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {


  searchedFilm = '';

  constructor(public filmService: FilmsService) {}

  ngOnInit() {

  }

  getFilmInLib(): any {
    return this.filmService.getFilmsFromLib(true);
  }

  clean() {
      this.searchedFilm = '';
  }

}

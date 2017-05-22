import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit {

  title = 'My Library';

  constructor(private _filmService: FilmsService) {}

  ngOnInit() {
  }

  getFilmInLib(): any {
    return this._filmService.getFilmsFromLib(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
// import { Film } from '../film';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {


  constructor(public filmService: FilmsService) {}

  ngOnInit() {

  }


}

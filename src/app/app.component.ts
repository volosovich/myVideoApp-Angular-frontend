import { Component } from '@angular/core';
import { Film } from './film';
import { FilmsService } from './films.service';
// import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FilmsService ]
})

export class AppComponent {}

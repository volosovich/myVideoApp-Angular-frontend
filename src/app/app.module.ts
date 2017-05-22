import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingModule } from './app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { AlsoWatchedComponent } from './also-watched/also-watched.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationComponent,
    FilmDetailsComponent,
    AlsoWatchedComponent,
    MyLibraryComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

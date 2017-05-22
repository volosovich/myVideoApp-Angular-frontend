import { TestBed, inject, async } from '@angular/core/testing';

import { FilmsService } from './films.service';

import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  RequestOptions,
  Response,
  ResponseOptions,
  HttpModule,
  XHRBackend
} from '@angular/http';
// import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { AlsoWatchedComponent } from './also-watched/also-watched.component';
import { NavigationComponent } from './navigation/navigation.component';




const films = [{
  _id: '1111111111111111111111111',
  id: 123456,
  name: 'Forest Gump: the film and nomination of Oscar',
  year: 1994,
  posterSmall: 'src/img/small-Forrest-Gump-714748--o--.jpg',
  poster: 'src/img/kinopoisk.ru-Forrest-Gump-714748--o--.jpg',
  actors: [
      'Tom Hanks',
      'Robin Wright',
      'Gary Sinise',
      'Mykelti Williamson'
  ],
  directors: [
      'Robert Zemekis'
  ],
  produsers: [
      'Wendy',
      'Steve',
      'Bob',
  ],
  synopsis: 'Forrest Gump, while not intelligent, has accidentally been present at many historic moments.'
}];

describe('FilmsService', () => {
  beforeEach(() => {
    const mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl') // create mock function navigateByUrl wich use in service
    };

    TestBed.configureTestingModule({
      providers: [
        FilmsService,
        // Http,
        // ConnectionBackend,
        BaseRequestOptions,
        MockBackend,
        // Router,
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ConnectionBackend, useClass: MockBackend},
        // { provide: XHRBackend, useClass: MockBackend },
        //
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
        {provide: Router, useValue: mockRouter},

      ],
      imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        RouterTestingModule.withRoutes([
          {path: 'search', component: SearchPageComponent}
        ]),
      ],
      declarations: [
        // AppComponent,
        // MainPageComponent,
        // NavigationComponent,
        SearchPageComponent,
        // FilmDetailsComponent,
        // AlsoWatchedComponent,
      ],
    });
  });

  it('should ...', inject([FilmsService], (service: FilmsService) => {
    expect(service).toBeTruthy();
  }));

  it('should exists local var', inject([FilmsService], (service: FilmsService) => {
    // console.log('VOLOS', expect(service));
    expect(service.filmsInLib).toBeTruthy();
    expect(service.searchedFilms).toBeTruthy();
    expect(service.url).toContain('http://');
  }));

  it('check getSearchedFilms()', inject([FilmsService], (service: FilmsService) => {
    service.searchedFilms = films;
    expect(service.getSearchedFilms()[0]._id).toContain(films[0]._id);
    expect(service.getSearchedFilms()[0].id).toEqual(films[0].id);
    expect(service.getSearchedFilms()[0].produsers).toContain('Bob');

  }));

  it('check getFilmsFromLib()', inject([FilmsService], (service: FilmsService) => {
    service.filmsInLib = films;
    expect(service.getFilmsFromLib(true)).toEqual(films.length);
    expect(JSON.stringify(service.getFilmsFromLib(false))).toEqual(JSON.stringify(films));

  }));

  it('check _searchFilmInLib()', inject([FilmsService], (service: FilmsService) => {
    service.filmsInLib = films;
    expect(service._searchFilmInLib(123456)).toEqual(0);
    expect(service._searchFilmInLib(12)).toEqual(undefined);
  }));

  it('check addToLib()', inject([FilmsService], (service: FilmsService) => {
    service.addToLib(films[0], false); // add film
    expect(JSON.stringify(service.filmsInLib)).toEqual(JSON.stringify(films));

    service.addToLib(films[0], false); // add exsisting film
    expect(JSON.stringify(service.filmsInLib)).toEqual(JSON.stringify(films));

    service.addToLib({id: 123}, true);
    expect(service.filmsInLib.length).toEqual(1);

    service.addToLib({id: 123456}, true);
    expect(service.filmsInLib.length).toEqual(0);

  }));

  it('should return an Observable<Array<Film>> with mock data, check getNewFilms()',
    async(inject([FilmsService, MockBackend], (service: FilmsService, mockBackend: MockBackend) => {

      const response = new ResponseOptions({
        body: JSON.stringify(films)
      });

      const baseResponse = new Response(response);

      mockBackend.connections.subscribe(
        (c: MockConnection) => c.mockRespond(baseResponse)
      );

      return service.getNewFilms().subscribe( data => {
        expect(data).toBeTruthy();
        expect(data).toEqual(films);
      });
    })
  ));

  it('should return an Observable<Array<Film>> with mock data, check getFilmDetails(id)',
    async(inject([FilmsService, MockBackend], (service: FilmsService, mockBackend: MockBackend) => {

      const response = new ResponseOptions({
        body: JSON.stringify(films[0])
      });

      const baseResponse = new Response(response);

      mockBackend.connections.subscribe(
        (c: MockConnection) => c.mockRespond(baseResponse)
      );

      return service.getFilmDetails(films[0]._id).subscribe( data => {
        expect(data).toBeTruthy();
        expect(data).toEqual(films[0]);
      });
    })
  ));

  it('should return an Observable<Array<Film>> with mock data, check searchFilm(word)',
    async(inject([FilmsService, MockBackend], (service: FilmsService, mockBackend: MockBackend) => {

      const response = new ResponseOptions({
        body: JSON.stringify(films)
      });

      const baseResponse = new Response(response);

      mockBackend.connections.subscribe(
        (c: MockConnection) => c.mockRespond(baseResponse)
      );

      service.searchFilm('');
      expect(service.searchedFilms).toEqual([]);


      service.searchFilm(films[0].name.substring(0, 6));
      expect(service.searchedFilms).toEqual(films);

    }))
  );

});

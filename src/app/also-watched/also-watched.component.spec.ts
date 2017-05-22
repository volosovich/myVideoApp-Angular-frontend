import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlsoWatchedComponent } from './also-watched.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Response, ResponseOptions, Http, ConnectionBackend, BaseRequestOptions, RequestOptions, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MyLibraryComponent } from '../my-library/my-library.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { FilmsService } from '../films.service';


describe('AlsoWatchedComponent', () => {
  let component: AlsoWatchedComponent;
  let fixture: ComponentFixture<AlsoWatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlsoWatchedComponent,
        MyLibraryComponent,
        SearchPageComponent
      ],
      imports: [
        RouterTestingModule,
        HttpModule

      ],
      providers: [
        Http,
        FilmsService,
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ConnectionBackend, useClass: MockBackend},
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should exists title var', () => {
    expect(component.title).toEqual('Viewers also watched');
  });
});

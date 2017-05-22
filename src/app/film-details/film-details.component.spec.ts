import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsComponent } from './film-details.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmsService } from '../films.service';
import { Http, ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';



describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilmDetailsComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        Http,
        FilmsService,
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ConnectionBackend, useClass: MockBackend},
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exists i18n Object', () => {
    expect(component.i18n.actors).toEqual('Actors');
  });
});

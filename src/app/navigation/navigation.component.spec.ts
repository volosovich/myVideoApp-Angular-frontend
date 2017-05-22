import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FilmsService } from '../films.service';
import { FormsModule } from '@angular/forms';


import { Http, ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        FilmsService,
        Http,
        ConnectionBackend,
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ConnectionBackend, useClass: MockBackend},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exists local var', () => {
    expect(component.searchedFilm).toEqual('');
  });

  it('check clean function', () => {
    expect(component.searchedFilm).toEqual('');
    component.searchedFilm = 'Terminator';
    expect(component.searchedFilm).toEqual('Terminator');
    component.clean();
    expect(component.searchedFilm).toEqual('');
  });
});

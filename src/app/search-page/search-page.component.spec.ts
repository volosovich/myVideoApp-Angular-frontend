import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageComponent } from './search-page.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FilmsService } from '../films.service';
import { FormsModule } from '@angular/forms';


import { Http, ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchPageComponent
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
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

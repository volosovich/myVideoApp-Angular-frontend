import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Response, ResponseOptions, Http, ConnectionBackend, BaseRequestOptions, RequestOptions, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation/navigation.component';
import { FilmsService } from './films.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent,

      ],
      imports: [
        RouterModule,
        RouterTestingModule,
        FormsModule,
        HttpModule

      ],
      providers: [
        Http,
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ConnectionBackend, useClass: MockBackend},
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});

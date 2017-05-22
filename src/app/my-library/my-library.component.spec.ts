import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryComponent } from './my-library.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FilmsService } from '../films.service';

import { Http, ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('MyLibraryComponent', () => {
  let component: MyLibraryComponent;
  let fixture: ComponentFixture<MyLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyLibraryComponent
      ],
      imports: [
        // FormsModule,
        RouterTestingModule
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
    fixture = TestBed.createComponent(MyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should exists local var', () => {
    expect(component.title).toEqual('My Library');
  });
});

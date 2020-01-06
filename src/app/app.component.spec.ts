import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PeopleSearchComponent} from './people-search/people-search.component';
import {PeopleAvatarComponent} from './people-avatar/people-avatar.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PeopleSearchService} from './people-search/people-search.service';
import {PeopleSearchFacade} from './people-search/people-search-facade.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            AppComponent,
            PeopleSearchComponent,
            PeopleAvatarComponent
        ],
        imports: [
            BrowserModule,
            CommonModule,
            HttpClientModule
        ],
        providers: [
            PeopleSearchService,
            PeopleSearchFacade
        ]
    }).compileComponents();
  }));

  it('Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

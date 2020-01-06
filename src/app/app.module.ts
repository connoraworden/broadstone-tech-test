import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PeopleSearchComponent} from './people-search/people-search.component';
import {PeopleSearchService} from './people-search/people-search.service';
import {PeopleSearchFacade} from './people-search/people-search-facade.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { PeopleAvatarComponent } from './people-avatar/people-avatar.component';

@NgModule({
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
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

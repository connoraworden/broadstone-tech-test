import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeopleSearchComponent} from './people-search.component';
import {AppComponent} from '../app.component';
import {PeopleAvatarComponent} from '../people-avatar/people-avatar.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PeopleSearchService} from './people-search.service';
import {PeopleSearchFacade} from './people-search-facade.service';

describe('PeopleSearchComponent', () => {
    let component: PeopleSearchComponent;
    let fixture: ComponentFixture<PeopleSearchComponent>;

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

    beforeEach(() => {
        fixture = TestBed.createComponent(PeopleSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('Should display results', () => {
        return component.sendRequest('Obi').then(() => {
            fixture.detectChanges();
            const resultsContainer = fixture.nativeElement.querySelector('.search__results__container');
            expect(resultsContainer.children.length).toEqual(1, 'There\'s more than one results being displayed');
        });
    });

    it('Should display no results found', () => {
        return component.sendRequest('asdfasdfasdfadsfads').then(() => {
            fixture.detectChanges();
            const noMessage = fixture.nativeElement.querySelector('.search__results__container h2');
            expect(noMessage).toBeTruthy('The no results message is not being displayed');
        });
    });

    it('Pagination should be hidden', () => {
        const paginationContainer = fixture.nativeElement.querySelector('.search__results__pagination__container');
        expect(paginationContainer).toBeNull('The pagination container is displayed');
    });

    it('Pagination should be visible', () => {
        return component.sendRequest('a').then(() => {
            fixture.detectChanges();
            const paginationContainer = fixture.nativeElement.querySelector('.search__results__pagination__container');
            expect(paginationContainer).toBeTruthy('The pagination container is not displayed');
        });
    });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeopleAvatarComponent} from './people-avatar.component';
import {AppComponent} from '../app.component';
import {PeopleSearchComponent} from '../people-search/people-search.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PeopleSearchService} from '../people-search/people-search.service';
import {PeopleSearchFacade} from '../people-search/people-search-facade.service';

describe('PeopleAvatarComponent', () => {
    let component: PeopleAvatarComponent;
    let fixture: ComponentFixture<PeopleAvatarComponent>;

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
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PeopleAvatarComponent);
        component = fixture.componentInstance;
        component.person = {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/'],
            species: ['https://swapi.co/api/species/1/'],
            vehicles: ['https://swapi.co/api/vehicles/14/', 'https://swapi.co/api/vehicles/30/'],
            starships: ['https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/22/'],
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            url: 'https://swapi.co/api/people/1/'
        };
        fixture.detectChanges();
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('Name should be Luke Skywalker', () => {
        const personName = fixture.nativeElement.querySelector('.people__avatar__container > h1');
        expect(personName.innerText).toEqual('Luke Skywalker', 'The name isn\'t being displayed');
    });

    it('Skin colour should be #E8BEB5', () => {
        const personHead = fixture.nativeElement.querySelector('.people__avatar__head');
        expect(rgb2hex(window.getComputedStyle(personHead).backgroundColor).toUpperCase())
            .toEqual('#E8BEB5', 'The wrong skin colour is being displayed');
    });

    it('Hair colour should be #D8BA8E', () => {
        const personHead = fixture.nativeElement.querySelector('.people__avatar__head');
        expect(rgb2hex(window.getComputedStyle(personHead).borderColor).toUpperCase())
            .toEqual('#D8BA8E', 'The wrong hair colour is being displayed');
    });

    it('Eye colour should be #0000FF', () => {
        const personEye = fixture.nativeElement.querySelector('.people__avatar__eye');
        expect(rgb2hex(window.getComputedStyle(personEye).backgroundColor).toUpperCase())
            .toEqual('#0000FF', 'The wrong eye colour is being displayed');
    });
});

// Annoyingly getComputedStyle returns rgba versions of colours instead of HEX so we have to convert it

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? '#' +
        ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PeopleSearchService {

    private baseApiUrl = 'https://swapi.co/api/people/';

    constructor(
        private http: HttpClient
    ) {
    }

    public search(query: string, page: string = '1'): Promise<PeopleSearchModel> {
        return new Promise<PeopleSearchModel>(((resolve, reject) => {
            this.http.get(`${this.baseApiUrl}?search=${query}&page=${page}`)
                .toPromise()
                .then((response: PeopleSearchModel) => resolve(response))
                .catch((error) => reject(error));
        }));
    }
}

export interface PeopleSearchModel {
    count: number;
    next: any;
    previous: any;
    results: Array<PeopleSearchDetailsModel>;
}

export interface PeopleSearchDetailsModel {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: Array<string>;
    species: Array<string>;
    vehicles: Array<string>;
    starships: Array<string>;
    created: string;
    edited: string;
    url: string;
}

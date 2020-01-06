import {Injectable} from '@angular/core';
import {PeopleSearchModel, PeopleSearchService} from './people-search.service';

@Injectable()

export class PeopleSearchFacade {
    constructor(
        private peopleSearchService: PeopleSearchService
    ) {
    }

    public search(query: string, pageNumber: string = '1'): Promise<PeopleSearchModel> {
        return new Promise<PeopleSearchModel>((resolve, reject) => {
            this.peopleSearchService.search(query, pageNumber).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

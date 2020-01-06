import {Component, OnInit} from '@angular/core';
import {PeopleSearchFacade} from './people-search-facade.service';
import * as _ from 'lodash';
import {PeopleSearchDetailsModel} from './people-search.service';

@Component({
    selector: 'app-people-search',
    templateUrl: './people-search.component.html',
    styleUrls: ['./people-search.component.scss']
})
export class PeopleSearchComponent implements OnInit {

    public debouncedSearch;

    public peopleData: Array<PeopleSearchDetailsModel> = [];
    public nextPageUrl: string = null;
    public previousPageUrl: string = null;
    public hasSearched = false;

    private pageNumberRegex = /page=\d+/;
    private lastKnownSearch: string = null;

    constructor(
        private peopleSearchFacade: PeopleSearchFacade
    ) {
        this.debouncedSearch = _.debounce(this.search, 250);
    }

    ngOnInit() {

    }

    public search($event: KeyboardEvent) {
        const eventTarget = $event.target as HTMLInputElement;
        this.lastKnownSearch = eventTarget.value;
        this.sendRequest(this.lastKnownSearch);
    }

    public changePage(pageUrl: string) {
        const pageNumber = pageUrl.match(this.pageNumberRegex)[0].replace('page=', '');
        this.sendRequest(this.lastKnownSearch, pageNumber);
    }

    public sendRequest(searchQuery: string, pageNumber: string = '1'): Promise<boolean> {
        return new Promise<boolean>(((resolve, reject) => {
            this.peopleSearchFacade.search(searchQuery, pageNumber).then((data) => {
                this.peopleData = data.results;
                this.nextPageUrl = data.next;
                this.previousPageUrl = data.previous;
                this.hasSearched = true;
                resolve(true);
            }).catch((error) => {
                console.error(error);
                reject(false);
            });
        }));
    }


}

import {Component, OnInit, Input} from '@angular/core';
import {PeopleSearchDetailsModel} from '../people-search/people-search.service';

@Component({
    selector: 'app-people-avatar',
    templateUrl: './people-avatar.component.html',
    styleUrls: ['./people-avatar.component.scss']
})
export class PeopleAvatarComponent implements OnInit {

    @Input('person') person: PeopleSearchDetailsModel;

    constructor() {
    }

    ngOnInit() {
        console.log(this.person);
        if (this.person) {
            this.person.skin_color = this.backgroundColourCalculator(this.person.skin_color);
            this.person.hair_color = this.checkColourIsCSSValue(this.person.hair_color);
        }
    }

    public backgroundColourCalculator(colour: string): string {
        const colourAsArray = colour.split(',');

        if (colourAsArray.length > 1) {
            let newColourString = 'linear-gradient(';

            colourAsArray.forEach((colourString: string) => {
                newColourString += this.buildColourGradient(colourString, '50%');
            });

            newColourString = newColourString.slice(0, -1) + ')';

            return newColourString;

        } else {
            return this.checkColourIsCSSValue(colour);
        }
    }

    private checkColourIsCSSValue(colour): string {

        // Some hair colours are comma separated values we only need one
        colour = colour.split(',')[0];

        // Some colours that come through are not valida CSS colours, e.g. 'dark', we need to change them
        if (colour === 'light' || colour === 'fair') {
            return '#E8BEB5';
        } else if (colour === 'dark') {
            return '#935638';
        } else if (colour === 'green-tan') {
            return '#1D2620';
        } else if (colour === 'brown mottle') {
            return '#673521';
        } else if (colour === 'blond') {
            return '#D8BA8E';
        } else if (colour === 'auburn') {
            return '#9D3B24';
        }

        return colour;
    }


    private buildColourGradient(colour: string, percentage: string): string {
        return `${this.checkColourIsCSSValue(colour)} ${percentage},`;
    }

}

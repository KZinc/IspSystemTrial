import {Component, Input} from '@angular/core';
import {AllComponent} from "../all/all.component";


@Component({
    selector: 'app-smiley-row',
    templateUrl: './smiley-row.component.html',
    styleUrls: ['./smiley-row.component.scss'],
})
export class SmileyRowComponent {

   showFullSize: boolean = false;
   top:string = '70px';
   left:string = '90px';

    @Input() smiley: string;
    @Input() smileys: {
        data: Object,
        names: Array<string>
    };

    showBigBro(event, value){
        this.top = (event.y - 75)+'px';
        this.left = (event.x - 75) +'px';
        this.showFullSize = value;
    }

    constructor(private data:AllComponent) {
    }


    addToFavourites(smiley){
        this.data.addToFavourites(smiley);
    }
    addToDeleted(smiley){
        this.data.addToDeleted(smiley);
    }

}

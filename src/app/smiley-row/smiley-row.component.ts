import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from "../data-service.service";


@Component({
    selector: 'app-smiley-row',
    templateUrl: './smiley-row.component.html',
    styleUrls: ['./smiley-row.component.scss'],
})
export class SmileyRowComponent implements OnInit{

   showFullSize: boolean = false;
   top:string = '70px';
   left:string = '90px';


    @Input() page:string;
    @Input() smiley: string;
    @Input() smileys: {
        data: Object,
        names: Array<string>
    };

    isFavourite: boolean;

    showBigBro(event, value){
        this.top = (event.y - 75)+'px';
        this.left = (event.x - 75) +'px';
        this.showFullSize = value;
    }

    constructor(private data: DataServiceService) {
    }

    addToFavourites(){
        if(this.isFavourite){
            this.data.deleteFavourite(this.smiley)
        }else {
            this.data.addToFavourites(this.smiley)
        }
        this.isFavourite = !this.isFavourite;
    }

    deleteSmiley(){
        if(this.page === 'Все'){
            this.data.deleteItem(this.smiley);
        }else{
            this.data.deleteFavourite(this.smiley);
        }

    }

    ngOnInit(): void {
        this.isFavourite = this.data.favouritesList.includes(this.smiley);
    }

}

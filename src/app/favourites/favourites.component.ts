import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
    header: string = 'Любимые';
    message: string;


    constructor(private data: DataServiceService) {
    }

    ngOnInit() {
        console.warn('iInit');
        this.data.currentList.subscribe(message => this.message = message)
    }
}

import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
    header: string = 'Любимые';
    smileys: {
        data: Object,
        names: Array<string>
    };
    display:Array<string> =[];
    filter:string ='';

    constructor(private data: DataServiceService) {
    }

    ngOnInit() {
        this.data.getAllSmileys().subscribe(data => {
            this.smileys = {data: data, names: Object.keys(data)};
            this.data.favourites.subscribe(() => this.display = this.data.favouritesList);
            this.data.filter.subscribe(filter => {
                this.filter = filter;
                this.display = this.smileys.names.filter(name => {
                    return this.data.favouritesList.includes(name) &&
                        (~name.toLowerCase().indexOf(filter.trim().toLowerCase()) || filter.trim() === '');
                }).slice(0, 20);
            });
        })
    }
}

import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

    header: string = 'Все';
    smileys: {
        data: Object,
        names: Array<string>
    };
    display: Array<string> = [];
    favourites: Array<string> = [];
    deleted: Array<string> = [];
    filter: string = '';

    constructor(private data: DataServiceService) {
    }

    ngOnInit() {
        this.data.getAllSmileys().subscribe(data => {
            this.smileys = {data: data, names: Object.keys(data)};
            this.display = Object.keys(data).slice(0, 20);
            this.data.deleted.subscribe(() => {
                this.deleted = this.data.deletedList;
                this.display = this.smileys.names.filter(name => !this.deleted.includes(name)).slice(0, 20);
            });
            this.data.filter.subscribe(filter => {
                this.filter = filter;
                this.display = this.smileys.names.filter(name => {
                    return !this.data.deletedList.includes(name) &&
                        (~name.toLowerCase().indexOf(filter.trim().toLowerCase()) || filter.trim() === '');
                }).slice(0, 20);
            });
            this.data.favourites.subscribe(() => this.favourites = this.data.favouritesList);
        })
    }
}

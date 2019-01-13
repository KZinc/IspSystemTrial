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
    namesArray: Array<string> = [];
    favourites: Array<string> = [];
    deleted: Array<string> = [];
    filter: string = '';
    pageNumber: number = 1;
    maxNumber: number = 1;

    constructor(private data: DataServiceService) {
    }

    onPageChanged(page: number) {
        this.pageNumber = page;
        this.display = this.namesArray.slice(this.getChunk().begin, this.getChunk().end);
    }

    getChunk() {
        return {begin: (this.pageNumber - 1) * 100, end: this.pageNumber * 100}
    }

    ngOnInit() {
        this.data.getAllSmileys().subscribe(data => {
            this.smileys = {data: data, names: Object.keys(data)};
            this.namesArray = Object.keys(data);
            this.display = this.namesArray.slice(this.getChunk().begin, this.getChunk().end);
            this.maxNumber = Number((Object.keys(data).length / 100).toFixed());
            this.pageNumber = 1;

            this.data.deleted.subscribe(() => {
                this.deleted = this.data.deletedList;
                this.namesArray = this.smileys.names.filter(name => !this.deleted.includes(name));
                this.maxNumber = Number((this.namesArray.length / 100).toFixed());
                if(this.maxNumber < this.pageNumber) this.pageNumber = this.maxNumber;
                this.display = this.namesArray.slice(this.getChunk().begin, this.getChunk().end);
            });

            this.data.filter.subscribe(filter => {
                this.filter = filter;
                this.namesArray = this.smileys.names.filter(name => {
                    return !this.data.deletedList.includes(name) &&
                        (~name.toLowerCase().indexOf(filter.trim().toLowerCase()) || filter.trim() === '');
                });
                this.pageNumber = 1;
                this.display = this.namesArray.slice(this.getChunk().begin, this.getChunk().end);
                this.maxNumber = Number((this.namesArray.length / 100).toFixed() +1);
            });
            this.data.favourites.subscribe(() => this.favourites = this.data.favouritesList);
        });
    }
}

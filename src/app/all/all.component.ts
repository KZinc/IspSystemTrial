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

    constructor(private data: DataServiceService) {
    }

    ngOnInit() {
        this.data.getAllSmileys().subscribe(data => {
            this.smileys = {data: data, names: Object.keys(data).slice(0, 20)};
            this.data.currentList.subscribe(item => {
                this.smileys.names = this.smileys.names.filter(name => {
                    return name !== item;
                });
            });
        })
    }
}

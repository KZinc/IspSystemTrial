import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    url: string = '/';

    allText: string = "Все";
    favourites: string = "Любимые";
    deleted: string = "Удаленные";

    constructor() {
    }

    chosen(url){
        return url === this.url;
    }

    changeUrl(newUrl: string) {
        this.url = newUrl;
    }

    ngOnInit(): void {
        this.url = document.location.pathname;
    }

}

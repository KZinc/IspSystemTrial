import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {setCookie, getCookie} from './cookieHelper';


@Injectable({
    providedIn: 'root'
})
export class DataServiceService {

    private displayDeleted = new BehaviorSubject('');
    private displayFavourites = new BehaviorSubject({item: '', action: ''});
    private displayFilter = new BehaviorSubject('');

    deleted = this.displayDeleted.asObservable();
    favourites = this.displayFavourites.asObservable();
    filter = this.displayFilter.asObservable();

    filterValue: string;
    pageNumber:number;
    favouritesList: Array<string> = [];
    deletedList: Array<string> = [];

    constructor(private http: HttpClient) {
        this.getDataFromCookies();
    }

    deleteItem(item: string) {
        this.deletedList.push(item);
        this.displayDeleted.next(item);
        setCookie('deletedList', this.deletedList, {expires: 100500})
    }

    restoreItem(item: string) {
        this.deletedList = this.deletedList.filter(deleted => item !== deleted);
        this.displayDeleted.next(item);
        setCookie('deletedList', this.deletedList, {expires: 100500})
    }

    setFilter(filter: string) {
        this.displayFilter.next(filter);
        this.filterValue = filter;
        setCookie('filter', filter, {expires: 100500})
    }

    savePage(pageNumber){
        setCookie('pageNumber', pageNumber, {expires: 100500})
    }

    addToFavourites(item: string) {
        this.favouritesList.push(item);
        this.displayFavourites.next({item, action: 'add'});
        setCookie('favouritesList', this.favouritesList, {expires: 100500})
    }

    deleteFavourite(item: string) {
        this.favouritesList = this.favouritesList.filter(favourite => item !== favourite);
        this.displayFavourites.next({item, action: 'delete'});
        setCookie('favouritesList', this.favouritesList, {expires: 100500})
    }

    getDataFromCookies() {
        let deletedListCookie = getCookie('deletedList');
        let favouritesListCookie = getCookie('favouritesList');
        let filterCookie = getCookie('filter');
        let pageNumberCookie = getCookie('pageNumber');
        
        this.deletedList = deletedListCookie ? deletedListCookie.split(',') : [];
        this.favouritesList = favouritesListCookie ? favouritesListCookie.split(',') : [];
        this.pageNumber = pageNumberCookie ? Number(pageNumberCookie) : 1;
        if (filterCookie) this.setFilter(filterCookie)
    }

    getAllSmileys() {
        return this.http.get('https://api.github.com/emojis')
    }
}

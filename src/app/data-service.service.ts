import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class DataServiceService {

    private displayList = new BehaviorSubject('');

    currentList = this.displayList.asObservable();


    constructor(private http: HttpClient) {
    }

    deleteItem(item:string){
        this.displayList.next(item)
    }

    getAllSmileys() {
        return this.http.get('https://api.github.com/emojis')
    }
}

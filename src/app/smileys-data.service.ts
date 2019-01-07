import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmileysDataService {

  constructor(private http: HttpClient) {
  }

  deleted: Array<string> = [];
  favourites: Array<string> = [];

  addToFavourites(smiley){
    this.favourites.push(smiley);
  }

  addToDeleted(smiley){
    this.deleted.push(smiley);
  }

  getAllSmileys(){
    return this.http.get('https://api.github.com/emojis')
  }
}

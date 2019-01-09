import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  header:string = 'Любимые';
message:string;
  testValue:string = 'значение в избранном';
  //constructor(private data: SmileysDataService) { }
  constructor(private data:DataServiceService) { }

  changeHim(){
    this.data.changeMessage('message from favourites')

  }
  ngOnInit() {
    console.warn('iInit');
    this.data.currentMessage.subscribe(message=>this.message = message)
  }
}

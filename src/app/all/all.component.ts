import { Component, OnInit } from '@angular/core';
import {SmileysDataService} from "../smileys-data.service";
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  header:string = 'Все';
  // smileys: {
  //   data:Object,
  //   names:Array<string>
  // };
  testValue: string = 'значение во всех';
  message:string;
  //constructor(private data: SmileysDataService) { }
  constructor(private data:DataServiceService) {
  }

  changeHim() {
    this.data.changeMessage('message from all')

  }

  // addToFavourites(smiley){
  //   this.smileys.names = this.smileys.names.filter(name => name !== smiley);
  //   delete this.smileys.data[smiley];
  //   this.data.addToFavourites(smiley);
  // }
  // addToDeleted(smiley){
  //   this.smileys.names = this.smileys.names.filter(name => name !== smiley);
  //   delete this.smileys.data[smiley];
  //   this.data.addToDeleted(smiley);
  // }
  //
  ngOnInit() {

    console.warn('iInit');
    this.data.currentMessage.subscribe(message => this.message = message)


  //   this.data.getAllSmileys().subscribe(data => {
  //     this.smileys = {data:data, names: Object.keys(data)};
  //   })
}
}

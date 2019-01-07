import { Component, OnInit } from '@angular/core';
import {SmileysDataService} from "../smileys-data.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  smileys: {
    data:Object,
    names:Array<string>
  };

  constructor(private data: SmileysDataService) { }

  addToFavourites(smiley){
    this.smileys.names = this.smileys.names.filter(name => name !== smiley);
    delete this.smileys.data[smiley];
    this.data.addToFavourites(smiley);
  }
  addToDeleted(smiley){
    this.smileys.names = this.smileys.names.filter(name => name !== smiley);
    delete this.smileys.data[smiley];
    this.data.addToDeleted(smiley);
  }

  ngOnInit() {
    this.data.getAllSmileys().subscribe(data => {
      this.smileys = {data:data, names: Object.keys(data)};
    })
  }
}

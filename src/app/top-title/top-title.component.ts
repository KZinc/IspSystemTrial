import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-top-title',
  templateUrl: './top-title.component.html',
  styleUrls: ['./top-title.component.scss']
})
export class TopTitleComponent implements OnInit {
  @Input() header:string;
  @Input() filter:string;

  constructor(private data: DataServiceService) { }

  glows:boolean = false;

  setGlow(){
    this.glows = !this.glows;
  }
  
  onKey(event){
    this.data.setFilter(event.target.value);
  }
  
  ngOnInit() {
  }

}

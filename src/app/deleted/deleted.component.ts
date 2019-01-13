import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {
  header:string = 'Удаленные';
  smileys: {
    data: Object,
    names: Array<string>
  };
  display:Array<string> =[];
  filter:string ='';

  constructor(private data: DataServiceService) {
  }

  ngOnInit() {
    this.data.getAllSmileys().subscribe(data => {
      this.smileys = {data: data, names: Object.keys(data)};
      this.data.deleted.subscribe(() => {
        this.display = this.data.deletedList.filter(name => {
          return this.data.deletedList.includes(name) &&
              (~name.toLowerCase().indexOf(this.filter.trim().toLowerCase()) || this.filter.trim() === '');
        });
      });
      this.data.filter.subscribe(filter => {
        this.filter = filter;
        this.display = this.smileys.names.filter(name => {
          return this.data.deletedList.includes(name) &&
              (~name.toLowerCase().indexOf(filter.trim().toLowerCase()) || filter.trim() === '');
        });
      });
    })
  }

}

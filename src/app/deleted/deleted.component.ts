import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {
  header:string = 'Удаленные';
  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-title',
  templateUrl: './top-title.component.html',
  styleUrls: ['./top-title.component.scss']
})
export class TopTitleComponent implements OnInit {
  @Input() header:string;
  constructor() { }

  ngOnInit() {
  }

}

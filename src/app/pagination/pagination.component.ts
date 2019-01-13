import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


  constructor() { }

  @Input()  pageNumber:number = 1;
  @Input()  maxNumber:number = 12;
  @Output() pageChanged = new EventEmitter<number>();

  pagination(action){
    let pageNumber = this.pageNumber;
    if(action === 'next' && pageNumber < this.maxNumber){
      pageNumber++;
    }else if(action === 'prev' && pageNumber > 1){
      pageNumber--
    }
    this.pageChanged.emit(pageNumber);
  }

  ngOnInit() {
  }

}

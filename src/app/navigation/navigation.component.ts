import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  allText: string ="Все";
  favourites: string ="Любимые";
  deleted: string ="Удаленные";

  constructor() { }

  ngOnInit() {
  }

}

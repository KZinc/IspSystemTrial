import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopTitleComponent } from './top-title/top-title.component';
import { ListComponent } from './list/list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { DeletedComponent } from './deleted/deleted.component';
import { AllComponent } from './all/all.component';
import {HttpClientModule} from "@angular/common/http";
import {SmileyRowComponent} from "./smiley-row/smiley-row.component";

@NgModule({
  declarations: [
    SmileyRowComponent,
    AppComponent,
    NavigationComponent,
    TopTitleComponent,
    ListComponent,
    FavouritesComponent,
    DeletedComponent,
    AllComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllComponent} from "./all/all.component";
import {FavouritesComponent} from "./favourites/favourites.component";
import {DeletedComponent} from "./deleted/deleted.component";

const routes: Routes = [
    {path: '', component: AllComponent},
    {path: 'favourites', component: FavouritesComponent},
    {path: 'deleted', component: DeletedComponent},
    {path: '**', component: AllComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

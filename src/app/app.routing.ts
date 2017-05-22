import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { SearchPageComponent } from './search-page/search-page.component';
// import { FilmResolveService } from './film-resolve.service';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'main-page'},
    {path: 'main-page', component: MainPageComponent},
    {path: 'my-library', component: MyLibraryComponent},
    {path: 'film-details/:id', component: FilmDetailsComponent},
    {path: 'search', component: SearchPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: []
})
export class RoutingModule { }

// export const RoutingComponents = [MainPageComponent, FilmDetailsComponent];

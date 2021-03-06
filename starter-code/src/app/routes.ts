import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./movies/movies.component";

const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'movie/:slug', component: MoviesComponent }
];

export {routes};

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { DetailsComponent } from "./details/details/details.component";

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details page'
  }
];

export default ROUTES

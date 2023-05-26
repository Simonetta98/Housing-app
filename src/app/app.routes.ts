import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { DetailsComponent } from "./details/details/details.component";
import { AddComponent } from "./add/add/add.component";

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
  },
  {
    path: 'add',
    component: AddComponent,
    title: 'Add page'
  }
];

export default ROUTES

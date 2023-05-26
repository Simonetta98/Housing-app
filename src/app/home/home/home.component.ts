import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from '../../location/location/location.component';
import { HousingService } from 'src/app/services/housing.service';
import { HouseLocation } from 'src/app/models/house-location';
import { Observable, filter, map } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LocationComponent, RouterModule],
  template: `
    <section>
      <form role="search" class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Filter by city" #filter>
        <button class="btn btn-outline-success" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
      <div class="d-flex mt-2">
      <button [routerLink]="['/add']" routerLinkActive="router-link-active"  class="btn btn-outline-success flex-grow-1" type="button">
         Add New House
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 18 18">
        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
      </button>
      </div>
      <section class="d-flex flex-wrap justify-content-between">
        <app-location
        *ngFor="let house of filteredLocationList$ | async"
        [houseLocation]="house"
        ></app-location>
      </section>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  filteredLocationList$: Observable<HouseLocation[]>;

  constructor(protected housingSrv: HousingService) {
    this.filteredLocationList$ = this.housingSrv.houseLocationList$
   }

  ngOnInit(): void {
  }

  filterResults(text: string){
    if(text) {
      this.filteredLocationList$ = this.housingSrv.houseLocationList$.pipe(
        // map to new array that filters houses by city
        map(data => data.filter(n => n.city.toLowerCase().includes(text.toLowerCase()))),
      );
    }
  }

}

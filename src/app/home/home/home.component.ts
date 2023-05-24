import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from '../../location/location/location.component';
import { HousingService } from 'src/app/services/housing.service';
import { HouseLocation } from 'src/app/models/house-location';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LocationComponent],
  template: `
    <section>
      <form role="search">
        <input class="form-control me-2" type="text" placeholder="Filter by city" #filter>
        <button class="btn btn-outline-success" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
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

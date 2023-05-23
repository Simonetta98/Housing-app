import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from '../../location/location/location.component';
import { HouseLocation } from 'src/app/models/house-location';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LocationComponent],
  template: `
    <section>
      <form action="">
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
      <section class="results">
        <app-location
        *ngFor="let house of houseLocationList"
        [houseLocation]="house"
        ></app-location>
      </section>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  houseLocationList: HouseLocation[] = [];

  constructor(private housingSrv: HousingService) {
    this.houseLocationList = this.housingSrv.getAllHouseLocations();
   }

  ngOnInit(): void {
  }

}

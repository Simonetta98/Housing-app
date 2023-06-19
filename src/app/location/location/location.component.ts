import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocation } from 'src/app/models/house-location';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from 'src/app/delete/delete/delete.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, RouterModule, DeleteComponent],
  template: `
    <section>
      <div class="card mt-3 shadow-lg">
      <app-delete [houseLocation]="houseLocation"></app-delete>
      <img [src]="houseLocation.photo" class="card-img-top" alt="photo of {{houseLocation.name}}">
      <div class="card-body">
      <h3 class="list-heading"> {{ houseLocation.name }}</h3>
      <div>
      <p class="list-location">{{ houseLocation.city }}, {{ houseLocation.state }}</p>
      <img src="../assets/location.svg" alt="location-icon">
      </div>
      </div>
      <a [routerLink]="['/details', houseLocation.id]" class="btn btn-success rounded-top-0">
       Learn More
       <img src="../assets/click.svg" alt="arrow-icon">
      </a>
      </div>
    </section>
  `,
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() houseLocation!: HouseLocation

  constructor() { }

  ngOnInit(): void {
  }

}

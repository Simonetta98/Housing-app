import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocation } from 'src/app/models/house-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="list">
      <img [src]="houseLocation.photo" class="list-pic" alt="photo of {{houseLocation.name}}">
      <h2 class="list-heading"> {{ houseLocation.name }}</h2>
      <p class="list-location">{{ houseLocation.city }}, {{ houseLocation.state }}</p>
      <a [routerLink]="['/details', houseLocation.id]">Learn More</a>
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

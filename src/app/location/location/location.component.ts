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
      <div class="card mt-3">
      <app-delete [houseLocation]="houseLocation"></app-delete>
      <img [src]="houseLocation.photo" class="card-img-top" alt="photo of {{houseLocation.name}}">
      <h2 class="list-heading"> {{ houseLocation.name }}</h2>
      <p class="list-location">{{ houseLocation.city }}, {{ houseLocation.state }}</p>
      <a [routerLink]="['/details', houseLocation.id]">Learn More</a>
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

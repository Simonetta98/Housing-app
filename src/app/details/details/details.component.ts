import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { HouseLocation } from 'src/app/models/house-location';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img [src]="houseLocation?.photo" alt="house-photo">
      <section class="house-description">
        <h2 class="house-heading">{{ houseLocation?.name }}</h2>
        <p class="house-location">{{ houseLocation?.city }}, {{ houseLocation?.state }}</p>
      </section>
      <section class="house-features">
        <h2>About this housing location</h2>
        <ul>
          <li>Units available: {{ houseLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ houseLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ houseLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="house-contact">
        <h2>Apply now to set an appointment</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name"></label>
          <input type="text" formControlName="firstName">

          <label for="last-name"></label>
          <input type="text" formControlName="lastName">

          <label for="email"></label>
          <input type="text" formControlName="email">
        <button class="primary" type="submit">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  //route: ActivatedRoute = inject(ActivatedRoute)  //another way to reference to the current route matched with inject()
  houseLocation?: HouseLocation;
  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  constructor(private route: ActivatedRoute, private housingSrv: HousingService) {
    const houseLocationId = Number(this.route.snapshot.params['id']);
    this.houseLocation = housingSrv.getHouseLocationById(houseLocationId);
  }

  ngOnInit(): void {
  }

  submitApplication(){
    let values = {
     firstName: this.applyForm.value.firstName ?? '',
     lastName: this.applyForm.value.lastName ?? '',
     email: this.applyForm.value.email ?? '',
    }
    this.housingSrv.submitApplication(values);
  };

}

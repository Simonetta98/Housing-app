import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { HouseLocation } from 'src/app/models/house-location';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article *ngIf="houseLocation$ | async">
      <div class="card mt-3">
        <div class="card-body">
      <img [src]="house?.photo" alt="house-photo" class="card-img-top">
      <section class="house-description">
        <h2>{{ house?.name }}</h2>
        <p>{{ house?.city }}, {{ house?.state }}</p>
      </section>
      <section class="house-features">
        <h2>About this housing location</h2>
        <ul>
          <li>Units available: {{ house?.availableUnits }}</li>
          <li>Wifi: {{ house?.wifi }}</li>
          <li>Laundry: {{ house?.laundry }}</li>
        </ul>
      </section>
      <section class="house-contact">
        <h2>Apply now to set an appointment</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <div class="mb-3">
          <label for="first-name" class="form-label">First Name</label>
          <input type="text" class="form-control" formControlName="firstName">
          </div>
          <div class="mb-3">
          <label for="last-name" class="form-label">Last Name</label>
          <input type="text" class="form-control" formControlName="lastName">
          </div>
          <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="text" class="form-control" formControlName="email">
          </div>
        <button class="btn btn-primary" type="submit">Apply now</button>
        </form>
      </section>
      </div>
      </div>
    </article>
  `,
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  //route: ActivatedRoute = inject(ActivatedRoute)  //another way to reference to the current route matched with inject()
  houseLocation$: Observable<HouseLocation>;
  house?: HouseLocation;

  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  constructor(private route: ActivatedRoute, protected housingSrv: HousingService) {
    const houseLocationId = Number(this.route.snapshot.params['id']);
    this.houseLocation$ = this.housingSrv.getHouseLocationById(houseLocationId).pipe(tap(data => this.house = data));
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

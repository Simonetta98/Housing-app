import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from 'src/app/services/housing.service';
import { HouseDto } from 'src/app/models/houseDTO';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="container">
      <h2>Add New Home</h2>
      <div *ngIf="submitSuccess" class="alert alert-success" role="alert">
      <strong>Successfully submitted</strong> <img src="../assets/house.svg" alt="house">
      </div>

      <form [formGroup]="postForm" (submit)="onSubmit()">
        <h5>House Info <img src="../assets/info.svg" alt="info"></h5>
        <div>
        <input type="text" aria-label="house-name" class="form-control" placeholder="Name" formControlName="name" required>
        </div>
        <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="alert alert-danger">
          Name is required
        </div>

        <div class="input-group">
        <input type="text" aria-label="house-state" class="form-control" placeholder="State" formControlName="state">
        <input type="text" aria-label="house-city" class="form-control" placeholder="City" formControlName="city">
        </div>
        <div class="d-flex">
        <div *ngIf="state?.invalid && (state?.dirty || state?.touched)" class="alert alert-danger flex-grow-1">
          State is required
        </div>
        <div *ngIf="city?.invalid && (city?.dirty || city?.touched)" class="alert alert-danger flex-grow-1">
          City is required
        </div>
        </div>

        <div>
        <input type="text" aria-label="house-units" class="form-control" placeholder="Available Units" formControlName="availableUnits">
        </div>
        <div *ngIf="availableUnits?.invalid && (availableUnits?.dirty || availableUnits?.touched)" class="alert alert-danger">
          Units number is required
        </div>

        <div class="input-group">
       <input type="file" class="form-control" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" aria-label="Upload" formControlName="photo">
        </div>
        <div *ngIf="availableUnits?.invalid && (availableUnits?.dirty || availableUnits?.touched)" class="alert alert-danger">
          Photo is required
        </div>

        <div class="d-flex">
        <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" formControlName="wifi">
    <label class="form-check-label" for="exampleCheck1">Wifi</label>
  </div>
  <div class="mb-3 ms-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" formControlName="laundry">
    <label class="form-check-label" for="exampleCheck1">Laundry</label>
  </div>
  </div>
  <button [disabled]="!postForm.valid" class="btn btn-primary" type="submit">Submit</button>
      </form>
    </section>
  `,
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  submitSuccess: boolean = false;

  postForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    availableUnits: new FormControl('', Validators.required),
    wifi: new FormControl(''),
    laundry: new FormControl('')
  })

  constructor(private housingSrv: HousingService) {
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let values = {
      name: this.postForm.value.name ?? '',
      city: this.postForm.value.city ?? '',
      state: this.postForm.value.state ?? '',
      photo: this.postForm.value.photo ?? '',
      availableUnits: this.postForm.value.availableUnits ?? '',
      wifi: this.postForm.value.wifi ?? '',
      laundry: this.postForm.value.laundry ?? '',
    }
    this.housingSrv.postHouseLocation(values as HouseDto).subscribe(()=> this.housingSrv.getAllHouseLocations());
    console.log('HOUSE:', values)
    this.postForm.reset();
    this.submitSuccess = true;
  };

  get name() { return this.postForm.get('name'); }
  get city() { return this.postForm.get('city'); }
  get state() { return this.postForm.get('state'); }
  get availableUnits() { return this.postForm.get('availableUnits'); }

}

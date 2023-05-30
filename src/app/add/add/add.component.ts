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
    <section>
      <h2>Add New Home</h2>
      <form [formGroup]="postForm" (submit)="postHouse()">
        <h5>House Info</h5>
        <div>
        <input type="text" aria-label="house-name" class="form-control" placeholder="Name" formControlName="name">
        </div>
        <div class="input-group">
        <input type="text" aria-label="house-state" class="form-control" placeholder="State" formControlName="state">
        <input type="text" aria-label="house-city" class="form-control" placeholder="City" formControlName="city">
        </div>
        <div>
        <input type="text" aria-label="house-units" class="form-control" placeholder="Avaible Units" formControlName="availableUnits">
        </div>
        <div class="input-group">
       <input type="file" class="form-control" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" aria-label="Upload" formControlName="photo">
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
  <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </section>
  `,
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  postForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    availableUnits: new FormControl('', Validators.required),
    wifi: new FormControl('', Validators.required),
    laundry: new FormControl('', Validators.required)
  })

  constructor(private housingSrv: HousingService) {
   }

  ngOnInit(): void {
  }

  postHouse(): void {
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
  };

}

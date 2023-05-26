import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2>Add New Home</h2>
      <form>
        <h5>House Info</h5>
        <div>
        <input type="text" aria-label="house-name" class="form-control" placeholder="Name">
        </div>
        <div class="input-group">
        <input type="text" aria-label="house-state" class="form-control" placeholder="State">
        <input type="text" aria-label="house-city" class="form-control" placeholder="City">
        </div>
        <div class="input-group">
       <input type="file" class="form-control" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" aria-label="Upload">
        </div>
        <div class="d-flex">
        <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Wifi</label>
  </div>
  <div class="mb-3 ms-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Laundry</label>
  </div>
  </div>
      </form>
    </section>
  `,
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

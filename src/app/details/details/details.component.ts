import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{houseLocationId}}
    </p>
  `,
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  //route: ActivatedRoute = inject(ActivatedRoute)  //reference to the current route matched
  houseLocationId = 0;
  constructor(public route: ActivatedRoute) {
    this.houseLocationId = Number(this.route.snapshot.params['id'])
  }

  ngOnInit(): void {
  }

}

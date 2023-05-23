import { Component } from '@angular/core';
import { HomeComponent } from './home/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header>
      <img class="logo" src="./assets/location-pin.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes-app';
}

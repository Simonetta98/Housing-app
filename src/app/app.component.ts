import { Component } from '@angular/core';
import { HomeComponent } from './home/home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header>
      <img class="logo" src="..." alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'homes-app';
}

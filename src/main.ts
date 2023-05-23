import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import ROUTES from './app/app.routes'

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
 //.catch(err => console.error(err));

//STANDALONE
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES)
  ]
}).catch(err => console.error(err));

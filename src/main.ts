import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import ROUTES from './app/app.routes'
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
 //.catch(err => console.error(err));

//STANDALONE
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));

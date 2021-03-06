import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {KeycloakService} from './app/common/keycloak.service';

if (environment.production) {
  enableProdMode();
}


KeycloakService.init()
  .flatMap(KeycloakService.loadProfile)
  .subscribe(loadAngular, handleError);


function loadAngular() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
}

function handleError() {
  console.warn(`keycloak failed, starting angular`);
  loadAngular();
}

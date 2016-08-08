import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {appRouterProviders} from "./app/app.routes";
import {HTTP_PROVIDERS} from "@angular/http";
import { XHRBackend } from '@angular/http';
import { InMemoryDataService } from './app/in-memory-data.service'
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  { provide: XHRBackend, useClass: InMemoryBackendService},
  { provide: SEED_DATA, useClass: InMemoryDataService}

]);

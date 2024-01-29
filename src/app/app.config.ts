import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    provideClientHydration(),
    provideAnimations()
]
};


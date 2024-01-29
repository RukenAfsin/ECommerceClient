import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule,ToastrModule.forRoot()),
    provideClientHydration(),
    provideAnimations()
]
};


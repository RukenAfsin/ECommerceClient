import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { RouterModule, provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './ui/components/register/register.component';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: 'baseUrl', useValue: 'https://localhost:7176/api', multi: true },
    provideRouter(routes),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes),ToastrModule.forRoot(), HttpClientModule // HttpClientModule'ı burada ekleyin
    ),
    provideClientHydration(),
    provideAnimations(),
    provideAnimations()
],
};
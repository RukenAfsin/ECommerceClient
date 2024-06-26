import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { RouterModule, provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpErrorHandlerInterceptorService } from './services/common/http-error-handler-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: 'baseUrl', useValue: 'http://localhost:5199/api', multi: true },
    { provide: 'baseSignalRUrl', useValue: 'http://localhost:5199/', multi: true },
    provideRouter(routes),
    importProvidersFrom(BrowserModule, 
                        BrowserAnimationsModule,
                        RouterModule.forRoot(routes),
                        ToastrModule.forRoot(), 
                        HttpClientModule,
                        JwtModule.forRoot({
                          config:{
                            tokenGetter:()=>localStorage.getItem("accessToken"),
                            allowedDomains:["localhost:5199"],
                          }
                        })
                       
    ),
    {provide:HTTP_INTERCEPTORS,useClass:HttpErrorHandlerInterceptorService,multi:true},
    provideClientHydration(),
    provideAnimations(),
    provideAnimations()
],
};
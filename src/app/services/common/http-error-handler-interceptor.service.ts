import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../ui/custom-toastr.service';
import { MessageType, Position } from '../admin/alertify.service';
import { UserAuthService } from './models/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerInterceptorService implements HttpInterceptor {
  constructor(private toastrService:CustomToastrService, private userAuthService:UserAuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


    return next.handle(req).pipe(catchError( error=>{
      switch(error.status){
         case HttpStatusCode.Unauthorized:
          this.toastrService.message("You do not have authority ",
           "Unauthorized transaction",{
            messageType:ToastrMessageType.Error,
            position:ToastrPosition.BottomFullWidth
           })
         this.userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken")).then(data=>{
          
         })


         break;

         case HttpStatusCode.InternalServerError: this.toastrService.message("Can not reach server ",
         "Server Error",{
          messageType:ToastrMessageType.Error,
          position:ToastrPosition.BottomFullWidth
         })
      
         break;

         case HttpStatusCode.BadRequest: this.toastrService.message("Invalid request made ",
         "Invalid request",{
          messageType:ToastrMessageType.Error,
          position:ToastrPosition.BottomFullWidth
         })
      
         break;

         case HttpStatusCode.NotFound: this.toastrService.message("Page not found ",
         "Page Not found",{
          messageType:ToastrMessageType.Error,
          position:ToastrPosition.BottomFullWidth
         })
      
         break;

          default:this.toastrService.message("Unexpected  error occurred",
          "Unexpected Error Occurred",{
           messageType:ToastrMessageType.Error,
           position:ToastrPosition.BottomFullWidth
          })

          break;
      }
      return of(error);
    }));
  }
}

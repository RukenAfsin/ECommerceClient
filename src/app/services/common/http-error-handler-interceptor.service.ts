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

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerInterceptorService implements HttpInterceptor {
  constructor(private toastrService:CustomToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


    return next.handle(req).pipe(catchError(error=>{
      switch(error.status){
         case HttpStatusCode.Unauthorized:
          this.toastrService.message("You do not have authority ",
           "Unauthorized transaction",{
            messageType:ToastrMessageType.Warning,
            position:ToastrPosition.TopRight
           })
        
         break;

         case HttpStatusCode.InternalServerError: this.toastrService.message("Can not reach server ",
         "Server Error",{
          messageType:ToastrMessageType.Warning,
          position:ToastrPosition.TopRight
         })
      
         break;

         case HttpStatusCode.BadRequest: this.toastrService.message("Invalid request made ",
         "Invalid request",{
          messageType:ToastrMessageType.Warning,
          position:ToastrPosition.TopRight
         })
      
         break;

         case HttpStatusCode.NotFound: this.toastrService.message("Page not found ",
         "Page Not found",{
          messageType:ToastrMessageType.Warning,
          position:ToastrPosition.TopRight
         })
      
         break;

          default:this.toastrService.message("Unexpected  error occurred",
          "Unexpected Error Occurred",{
           messageType:ToastrMessageType.Warning,
           position:ToastrPosition.TopRight
          })

          break;
      }
      return of(error);
    }));
  }
}

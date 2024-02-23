import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { TokenResponse } from '../../../contracts/token/tokenResponse';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClientService: HttpClientService, private toastrService: CustomToastrService) { }

  async login(UserNameOrEmail :string, Password:string,any):Promise<any>{
    const observable:Observable<any | TokenResponse>=this.httpClientService.post<any|TokenResponse>({
    controller:"auth",
    action:"login"
  },{UserNameOrEmail,Password})

 const tokenResponse:TokenResponse =await firstValueFrom(observable) as TokenResponse;
 if(tokenResponse)
 localStorage.setItem("accessToken", tokenResponse.token.accessToken)
 {  
  this.toastrService.message("User login successfull","login success",
      {
         messageType:ToastrMessageType.Success,
         position:ToastrPosition.TopRight
      }) 

  } 
 }
}

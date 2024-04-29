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
 localStorage.setItem("refreshToken", tokenResponse.token.refreshToken)
 {  
  this.toastrService.message("User login successfull","login success",
      {
         messageType:ToastrMessageType.Success,
         position:ToastrPosition.TopRight
      }) 

  } 
 }

 async refreshTokenLogin(refreshToken:string, callBackFunction?:(state)=>void):Promise<any>{
  const observable :Observable<any | TokenResponse> = this.httpClientService.post({
    action :"refreshtokenlogin",
    controller:"auth"
  },{refreshToken:refreshToken})

  try{
    const tokenResponse :TokenResponse = await firstValueFrom(observable)as TokenResponse;
    if(tokenResponse){
      localStorage.setItem("accessToken", tokenResponse.token.accessToken)
      localStorage.setItem("refreshToken", tokenResponse.token.refreshToken)
    }
    callBackFunction(tokenResponse?true :false);
  }
  catch {
    callBackFunction(false);
  }



  const tokenResponse :TokenResponse = await firstValueFrom(observable)as TokenResponse;


  // if(tokenResponse){
  //   localStorage.setItem("accessToken", tokenResponse.token.accessToken)
  //   localStorage.setItem("refreshToken", tokenResponse.token.refreshToken)
  // }
  // callBackFunction(tokenResponse?true :false);

}
}

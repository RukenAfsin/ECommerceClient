
import { Injectable } from '@angular/core';
import { Toast } from 'ngx-toastr';
import { firstValueFrom, observable, Observable } from 'rxjs';
import { Create_User } from '../../../contracts/users/create_user';
import { User } from '../../../entities/user';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { HttpClientService } from '../http-client.service';
import { Token } from '../../../contracts/token/token';
import { TokenResponse } from '../../../contracts/token/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClientService: HttpClientService, private toastrService: CustomToastrService) { }

  async create(user: User): Promise<Create_User> {
    const observable: Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
      controller: "users"
    }, user);

    const result = await firstValueFrom(observable);

    if ('succeeded' in result && 'message' in result) {
      return result as Create_User;
    } else {
      throw new Error('Unexpected response format');
    }
  }

 async login(UserNameOrEmail :string, Password:string):Promise<any>{
    const observable:Observable<any | TokenResponse>=this.httpClientService.post<any|TokenResponse>({
    controller:"users",
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


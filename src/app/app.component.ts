import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { RegisterComponent } from './ui/components/register/register.component';
import { AuthService } from './services/common/auth.service';
import {  Router } from '@angular/router';
import { HttpClientService } from './services/common/http-client.service';
import { BasketsComponent } from './ui/components/baskets/baskets.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,RegisterComponent,BasketsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public authService:AuthService,private toastrService:CustomToastrService
    ,private router:Router,httpClientService:HttpClientService )
  {

 

    authService.identityCheck()
  }
  
  signOut(){
    localStorage.removeItem("accessToken")
    this.authService.identityCheck()
    this.router.navigate([""])
    this.toastrService.message("The session is closed", "Session Closed",{
      messageType:ToastrMessageType.Warning,
      position:ToastrPosition.TopRight
    })
  }

}

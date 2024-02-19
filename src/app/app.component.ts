import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './ui/components/register/register.component';
import { AuthService } from './services/common/auth.service';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public authService:AuthService,private toastrService:CustomToastrService,
    private router:Router )
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



// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
// import { HttpClientModule } from '@angular/common/http';
// import { RegisterComponent } from './ui/components/register/register.component';
// import { AuthService } from './services/common/auth.service';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterModule, RegisterComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {

//   constructor(public authService: AuthService) {
//     // localStorage kullanmadan önce kontrol et
//     if (typeof localStorage !== 'undefined') {
//       // localStorage mevcutsa, authService üzerinden işlemleri gerçekleştir
//       authService.identityCheck();
//     } else {
//       console.error('localStorage is not supported');
//     }
//   }
// }

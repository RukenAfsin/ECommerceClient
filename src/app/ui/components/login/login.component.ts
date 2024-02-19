import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../../services/common/models/user.service';
import { AuthService } from '../../../services/common/auth.service';
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {

  constructor(private userService:UserService,private authService:AuthService,
    private activatedRoute:ActivatedRoute,
    private router: Router){}

  async login(UserNameOrEmail :string, Password:string){
   await  this.userService.login(UserNameOrEmail, Password, ()=>{
    this.authService.identityCheck();

    this.activatedRoute.queryParams.subscribe(params=>{
      const returnUrl: string = params["returnUrl"]
      if(returnUrl)
      this.router.navigate([returnUrl])
    })
   })
  }
}

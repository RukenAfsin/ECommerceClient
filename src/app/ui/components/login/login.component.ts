import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../../services/common/models/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {

  constructor(private userService:UserService){}

  async login(UserNameOrEmail :string, Password:string){
   await  this.userService.login(UserNameOrEmail, Password)
  }
}

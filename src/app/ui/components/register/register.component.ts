import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../../entities/user';
import { UserService } from '../../../services/common/models/user.service';
import { Create_User } from '../../../contracts/users/create_user';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, private userService:UserService,
   private  toastrService:CustomToastrService ) {

    this.frm = this.formBuilder.group({
      namesurname: ["", [Validators.required, Validators.maxLength(50),
      Validators.minLength(3)]],
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", 
      [Validators.required]],
      passwordconfirm: ["", 
     [Validators.required]]
    },{

      validators:(group:AbstractControl): ValidationErrors|null=>{
        let password=group.get("password").value;
        let passwordconfirm =group.get("passwordconfirm").value;  
        return password === passwordconfirm?null:{notSame:true}
      }
    }
    )

  }

  frm: FormGroup;

  get component() {
    return this.frm.controls;
  }

 submitted: boolean = false;
 async onSubmit(user: User) {
    this.submitted = true;
 

    if (this.frm.invalid)
      return;

      const result: Create_User = await this.userService.create(user);
      if (result.succeeded)
        this.toastrService.message(result.message, "Register Success", {
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        })
      else
        this.toastrService.message(result.message, "Register Error", {
          messageType: ToastrMessageType.Error,
          position: ToastrPosition.TopRight
        })
    }
  }
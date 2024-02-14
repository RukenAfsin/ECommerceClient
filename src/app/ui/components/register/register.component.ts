import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../../entities/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder) {

    this.frm = this.formBuilder.group({
      namesurname: ["", [Validators.required, Validators.maxLength(50),
      Validators.minLength(3)]],
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", 
      [Validators.required]],
      passwordconfirm: ["", 
     [Validators.required
    ]]
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
  onSubmit(data: User) {
    this.submitted = true;
    // var c = this.component;
    // var f= this.frm;
    // var d= this.frm.hasError("notSame")


    if (this.frm.invalid)
      return;
  }



}

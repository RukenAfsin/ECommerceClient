import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private formBuilder:FormBuilder){

    this.frm=this.formBuilder.group({
      namesurname:["",[Validators.required,Validators.maxLength(50),Validators.minLength(3)]],
      username:["",[Validators.required]],
      email:["",[Validators.required,Validators.email]],
      password:[""],
      passwordconfirm:[""]
    })
  }

  frm:FormGroup;

get component(){
  return this.frm.controls;
}

submitted:boolean=false;
  onSubmit(data:any){
  this.submitted=true;
var c =this.component;



  if(this.frm.invalid)
  return;
    debugger;
  }
 
}

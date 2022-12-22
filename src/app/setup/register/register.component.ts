import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userObj!:User;
  registerForm!: FormGroup;
  constructor( private serv:UserService, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm  = this.fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email:[''],
      phoneNumber:['', Validators.required],
      password:['', Validators.required],
      gender:['', Validators.required],
      roles:[],
      birthDate:[],
    })
  }

  onRegister(){

    if(this.registerForm.valid){
      
      this.userObj=this.registerForm.value;
      this.userObj.roles ='Customer';
      this.serv.saveProduct(this.userObj)
      .subscribe(res=>{
        console.log(res);
        alert("Saved")
      } 
      , err=>{
        alert('Something Wrong');
      }
      )
    }
    else{
      ValidateForm.validateAllFormFields(this.registerForm);
      
    }
  }


}

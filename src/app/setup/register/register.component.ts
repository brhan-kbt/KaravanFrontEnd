import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
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
  constructor( private serv:UserService, private fb:FormBuilder, private toast:NgToastService) { }

  ngOnInit(): void {

    this.registerForm  = this.fb.group({
      fullName:['', [Validators.required]],
      email:['', Validators.required],
      phoneNumber:['', [Validators.required,Validators.pattern("(251)[0-9]{9}"),]],
      password:['',[Validators.required,Validators.minLength(6) ,Validators.maxLength(15), Validators.compose([
        ValidateForm.patternValidator(/\d/, { hasNumber: true }),
        // ValidateForm.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // ValidateForm.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // ValidateForm.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,{ hasSpecialCharacters: true})
      ])]
    ],
      // gender:[],
      // role:[],
      // birthDate:[],
    })
  }

  onRegister(){

  
    if(this.registerForm.valid){
      this.userObj=this.registerForm.value;
      // console.log(this.userObj);
      const phoneNumber= '+'+this.registerForm.value.phoneNumber;
      this.registerForm.value.phoneNumber=phoneNumber;

      const formData = new FormData();
      formData.append('fullName', this.registerForm.value.fullName);
      formData.append('email', this.registerForm.value.email);      
      formData.append('phoneNumber', this.registerForm.value.phoneNumber);      
      formData.append('password', this.registerForm.value.password);      
      
      // console.log(this.userObj);
      
      this.serv.saveUser(this.userObj)
      .subscribe(res=>{
        console.log(res);
        this.toast.success({detail:"success", summary:"Registered In Successfully!"});
      } 
      , err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
      }
      )
    }
    else{
      ValidateForm.validateAllFormFields(this.registerForm);
    }
  }
  


}

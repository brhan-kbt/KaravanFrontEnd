import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm !: FormGroup;

  constructor(
    private router:Router,
    private serv:UserService,
    private toast:NgToastService,
    private store:UserStoreService,
    private fb:FormBuilder) {
    
   }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      
      // alert(this.loginForm.value.phoneNumber + this.loginForm.value.password);
      this.serv.login(this.loginForm.value)
      .subscribe(res=>{ 
        this.serv.storeToken(res.token);
        const tokenPayload = this.serv.decodedToken();
        this.store.setFullnameForStore(tokenPayload.name);
        this.store.setRoleForStore(tokenPayload.role);
        this.toast.warning({detail:"success", summary:"Logged In Successfully!"});
        
        this.router.navigate(['dashboard']);
      } 
      , err=>{
        this.toast.warning({detail:"warning", summary:"Something Went Wrong!"});
      })
    }
    else{
    ValidateForm.validateAllFormFields(this.loginForm);      
    }
  }


}

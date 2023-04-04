import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';
import { Response } from 'src/app/models/response';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm !: FormGroup;
  res:Response[]=[];
  constructor(
    private router:Router,
    private serv:UserService,
    private toast:NgToastService,
    private store:UserStoreService,
    private fb:FormBuilder
    ) {
    
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneOrEmail:['', Validators.required],
      password:['', Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
     
      this.serv.login(this.loginForm.value)
      .subscribe(res=>{ 
        this.serv.storeToken(res.data.token);
        this.serv.storeRefreshToken(res.data.refreshToken)
        const tokenPayload = this.serv.decodedToken();
        // console.log(tokenPayload);
        this.store.setFullnameForStore(tokenPayload.name);
        this.store.setRoleForStore(tokenPayload.role);
        this.store.setImagePathForStore(tokenPayload.ImagePath);
        this.store.setEmailForStore(tokenPayload.email);
        this.store.setIdForStore(tokenPayload.Id);

        this.toast.success({detail:"success", summary:"Logged In Successfully!"});

        console.log();
        
        if(tokenPayload.role=='Customer'){
          this.router.navigate(['my-dashboard']);
        }
        else if(tokenPayload.role=='Branch Admin'){
          this.router.navigate(['order-mgt']);
        } 
        else{
          this.router.navigate(['dashboard']);
        }
        
      }, err=>{
        this.toast.warning({detail:"warning", summary:"Something Went Wrong!"});
      })
    }
    else{
    ValidateForm.validateAllFormFields(this.loginForm);      
    }
  }

  


}

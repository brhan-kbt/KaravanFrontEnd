import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { User } from 'src/app/models/user';
import { BranchService } from 'src/app/services/branch/branch.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  addUserForm!:FormGroup;
  userObj !:User;
  branch:any;
  constructor(private fb:FormBuilder,
              private  serv:UserService,
              private toast:NgToastService,
              private b:BranchService
              ) { }
  

  ngOnInit(): void {
    this.addUserForm =  this.fb.group({
      fullName:['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email:['', Validators.required],
      phoneNumber:['', [Validators.required,Validators.pattern("(251)[0-9]{9}"),]],
      password:['',[Validators.required,Validators.minLength(8), Validators.maxLength(15) , Validators.compose([
        ValidateForm.patternValidator(/\d/, { hasNumber: true }),
        // ValidateForm.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // ValidateForm.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // ValidateForm.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,{ hasSpecialCharacters: true})
      ])]
    ],
      // gender:[],
       role:['', Validators.required],
       branchId:['', Validators.required],
      // birthDate:[],
    })

    this.b.getBranches().subscribe(res=>{
      this.branch=res.data;
      console.log(this.branch);
      
    })
  }

  onAddingUser(){
    // console.log(this.addUserForm.value);
    
    if(this.addUserForm.valid){
      // console.log(this.addUserForm.value);
      const phoneNumber= '+'+this.addUserForm.value.phoneNumber;
      this.addUserForm.value.phoneNumber=phoneNumber;
      console.log(this.addUserForm.value.phoneNumber);
      this.userObj=this.addUserForm.value;

      console.log(this.userObj);
      

      
      const formData = new FormData();
      formData.append('fullName', this.addUserForm.value.fullName);
      formData.append('email', this.addUserForm.value.email);      
      formData.append('phoneNumber', this.addUserForm.value.phoneNumber);      
      formData.append('password', this.addUserForm.value.password);      
      formData.append('role', this.addUserForm.value.role);      
      
      // console.log();
      
      
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
      ValidateForm.validateAllFormFields(this.addUserForm);
    }
  }

}

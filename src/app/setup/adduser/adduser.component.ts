import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  addUserForm!:FormGroup;
  userObj !:User;
  constructor(private fb:FormBuilder,
              private  serv:UserService
              ) { }
  

  ngOnInit(): void {

    this.addUserForm =  this.fb.group({
      fullName:['', Validators.required],
      phoneNumber:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      username:['', Validators.required],
      password:['', Validators.required],
      userType:['', Validators.required]
    })
  }

  onAddingUser(){
    if(this.addUserForm.valid){
      // console.log(this.addUserForm.value);


      this.userObj=this.addUserForm.value;
      
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
      ValidateForm.validateAllFormFields(this.addUserForm);
    }
  }

}

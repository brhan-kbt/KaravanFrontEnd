import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { BranchService } from 'src/app/services/branch/branch.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  editUserData!:FormGroup;
  photo!:File;
  UserFromDatabase:any;
  branch:any;

  constructor(private activatedRoute:ActivatedRoute,
    private  toast:NgToastService,
    private user:UserService,
    private b:BranchService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.editUserData =  this.fb.group({
      fullName:['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email:['', Validators.required],
      phoneNumber:['', [Validators.required,Validators.pattern("(251)[0-9]{9}"),]],
      password:['',[Validators.required,Validators.minLength(8), Validators.maxLength(15) , Validators.compose([
        ValidateForm.patternValidator(/\d/, { hasNumber: true }),
      ])]
    ],
       role:['', Validators.required],
    })

    this.b.getBranches().subscribe(res=>{
      this.branch=res.data;
    })
    const id = this.activatedRoute.snapshot.params['id'];   
    // console.log(id);
    this.user.getUserbyId(id).subscribe(res=>{
      this.UserFromDatabase=res.data;
    //  console.log(this.UserFromDatabase);

      
    })
  }

  onFileSelect(event:any){
    this.photo=  <File>event.target.files[0];
    console.log(this.photo);
  }


  onEditingUser(){
    const formData = new FormData();

    console.log(this.UserFromDatabase);
    console.log(this.editUserData.value);
    

    const phone= '+' + this.editUserData.value.phoneNumber;
    console.log(this.editUserData.value.fullName, this.UserFromDatabase.fullName);
    
    formData.append('fullName', this.editUserData.value.fullName!=''?this.editUserData.value.fullName: this.UserFromDatabase.fullName);
    formData.append('email',this.editUserData.value.email!=''?this.editUserData.value.email: this.UserFromDatabase.email);
    formData.append('phoneNumber',this.editUserData.value.phoneNumber!=''?this.editUserData.value.phoneNumber:  this.UserFromDatabase.phoneNumber);
    formData.append('password', this.editUserData.value.password!=''?this.editUserData.value.password: this.UserFromDatabase.password);
     formData.append('role', this.editUserData.value.role!=''?this.editUserData.value.role: this.editUserData.value.role);      
     formData.append('imagePath', this.photo);     
     
     
    // formData.append('birthDate',this.UserFromDatabase.birthDate);      
    // formData.append('role', this.UserFromDatabase.role);      
    // formData.append('email', (this.editUserData.value.email !='')?this.editUserData.value.email:this.UserFromDatabase.email);      
    // formData.append('category', (this.editUserData.value.category !='')?this.editUserData.value.category:this.UserFromDatabase.category);       
    // formData.append('mainIngredients',  (this.editUserData.value.mainIngredients !='')?this.editUserData.value.mainIngredients:this.UserFromDatabase.mainIngredients);
    // formData.append('active', 'false');  
    
    this.user.updateUser(formData, this.activatedRoute.snapshot.params['id'])
       .subscribe(res=>{
        this.toast.success({detail:"success", summary:"User Updated Successfully!"});

       },err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
       }
       )
  }
}

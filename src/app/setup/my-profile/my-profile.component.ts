import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  
  name:string ='';
  imagePath:string='';
  role:string='';
  email:string='';
  btnFlag:boolean=false;
  id!:string;

  photo!:File;
  user:any;
  date!:any;

  updateUserForm!: FormGroup;
  constructor(
    private store:UserStoreService,
    private auth:UserService,
    private fb:FormBuilder,
    private toast:NgToastService

    ) { 
    this.updateUserForm =  this.fb.group({
      gender:[''],
      birthDate:[''],
    })
    
    this.auth.getUserbyId(this.id).subscribe(res=>{
      this.user=res.data;
      console.log(this.user);

    })
    this.store.getFullnameFromStore()
    .subscribe(val=>{
      const FromToken= this.auth.getFullNameFromToken();
      this.name=val||FromToken;
    })


    this.store.getImagePathFromStore()
    .subscribe(val=>{
      const FromToken= this.auth.getImagePathFromToken();
      this.imagePath=val||FromToken;
    })

    this.store.getRoleFromStore()
    .subscribe(val=>{
      const FromToken=this.auth.getRoleFromToken();
      this.role=val||FromToken;

    })
    this.store.getEmailFromStore()
    .subscribe(val=>{
      const FromToken=this.auth.getEmailFromToken();
      this.email=val||FromToken;

    })
    const that = this;

    this.store.getIdFromStore()
    .subscribe(val=>{
      const FromToken=this.auth.getIdFromToken();
      that.id=val||FromToken;
      that.userFunction();
    })
  }

  ngOnInit(): void {
  }

  

  onFileSelect(event:any){
    this.photo=  <File>event.target.files[0];
    console.log(this.photo);
  }


  userFunction(){

    this.auth.getUserbyId(this.id).subscribe(res=>{
      this.user=res.data;
      const myDate = new Date(this.user.birthDate);
      const datePipe = new DatePipe('en-US');
      this.date = datePipe.transform(myDate, 'MM/dd/yyyy');
      console.log(this.date); // Output: 03/04/2023

      
      
     
    })
    

  }
  checkBtn(){
    this.btnFlag=true;
  }

  onUpdate(){
    const formData = new FormData();

    console.log(this.updateUserForm.value);

    
    formData.append('gender',this.updateUserForm.value.gender);
    formData.append('birthDate',this.updateUserForm.value.birthDate);
    formData.append('imagePath',this.photo);

    
     this.auth.updateUser(formData, this.id)
        .subscribe(res=>{
         this.toast.success({detail:"success", summary:"User Updated Successfully!"});

        },err=>{
         this.toast.error({detail:"error", summary:"Something Went Wrong!"});
        }
        )
  }
}

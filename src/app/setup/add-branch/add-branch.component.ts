import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { BranchService } from 'src/app/services/branch/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  addBranch!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private branch:BranchService,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {

    this.addBranch=this.fb.group({
      branchName:['',Validators.required],
      branchAddress:['',Validators.required],
      openingHour:['',Validators.required],
      closingHour:['',Validators.required],
    })
  }


  onAddingBranch(){

    if(this.addBranch.valid){

      // const formData = new FormData();
      // formData.append('branchName', this.addBranch.value.branchName);
      // formData.append('branchAddress', this.addBranch.value.branchAddress); 
      
      
      this.branch.saveBranch(this.addBranch.value)
      .subscribe(res=>{ this.toast.success({detail:"success", summary:"Branch Added Successfully!"});

    },err=>{
     this.toast.error({detail:"error", summary:"Something Went Wrong!"});
    }
    )
    }
    else{
      ValidateForm.validateAllFormFields(this.addBranch);
    }
  }
}

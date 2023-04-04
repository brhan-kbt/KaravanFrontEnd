import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Branch } from 'src/app/models/branch';
import { BranchService } from 'src/app/services/branch/branch.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {
 BranchFromDatabase:any;
  addBranch!:FormGroup;
  branchObj :any;
  constructor(
    private fb:FormBuilder,
    private branch:BranchService,
   private activatedRoute:ActivatedRoute,
   private toast:NgToastService
  ) { }

  ngOnInit(): void {

    this.addBranch=this.fb.group({
      branchName:[''],
      branchAddress:[''],
      openingHour:[''],
      closingHour:[''],
    })

     const id =this.activatedRoute.snapshot.params['id'];
     console.log(id);
     
     this.branch.getBranchbyId(id).subscribe(res=>{
        this.BranchFromDatabase=res.data;
        console.log(this.BranchFromDatabase);
      })
  }


  onAddingBranch(){

    this.addBranch.value.branchName = (this.addBranch.value.branchName != '') ? this.addBranch.value.branchName :this.BranchFromDatabase.branchName;
    this.addBranch.value.branchAddress = (this.addBranch.value.branchAddress != '') ? this.addBranch.value.branchAddress : this.BranchFromDatabase.branchAddress;
    this.addBranch.value.openingHour = (this.addBranch.value.openingHour != '') ? this.addBranch.value.openingHour : this.BranchFromDatabase.openingHour;
    this.addBranch.value.closingHour = (this.addBranch.value.closingHour != '') ? this.addBranch.value.closingHour : this.BranchFromDatabase.closingHour;
   
    console.log( this.addBranch.value);
    
    
    
      this.branch.updateBranch( this.addBranch.value, this.activatedRoute.snapshot.params['id'])
      .subscribe(res=>{
        this.toast.success({detail:"success", summary:"Branch Updated Successfully!"});
      }, err=>{
            this.toast.success({detail:"error", summary:"Something Went Wrong!"});
      }
      )
   
  }
}
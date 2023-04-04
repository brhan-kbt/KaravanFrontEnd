import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategory!:FormGroup;
  photo!:File;
  constructor(
    private fb:FormBuilder,
    private toast:NgToastService,
    private cat:CategoriesService
  ) { }

  ngOnInit(): void {

    this.addCategory=this.fb.group({
      categoryName:['',Validators.required],
      categoryDescription:['',Validators.required],
      imagePath:['',Validators.required],
    })
  }

  onAddingCategory(){
       
    if(this.addCategory.valid){
      // const isActive:boolean=false;
      const formData = new FormData();
      formData.append('categoryName', this.addCategory.value.categoryName);
      formData.append('categoryDescription', this.addCategory.value.categoryDescription);      
      formData.append('image', this.photo);
    
      // console.log(this.productObj);
    
       this.cat.saveCategory(formData)
       .subscribe(res=>{
        this.toast.success({detail:"success", summary:"Category Added Successfully!"});

       },err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
       }
       )
    }
    else{
      ValidateForm.validateAllFormFields(this.addCategory);
    }
  }
  
  onFileSelect(event: any) {
    this.photo=  <File>event.target.files[0];
    console.log(this.photo);
    
    }
}

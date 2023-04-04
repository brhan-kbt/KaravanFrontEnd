import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html',
  styleUrls: ['./edit-sub-category.component.css']
})
export class EditSubCategoryComponent implements OnInit {

  
  editSubCategory!:FormGroup;
  subcategoryObj !: Product ;
  Category:any;
  categories:any;
  SubCategory:any;
  filteredSubCategory:any[]=[];
  SubCategoryFromDatabase:any;
  
  photo!:File;

  constructor(
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private category:CategoriesService,
    private toast:NgToastService
  ) {
    
    this.editSubCategory=this.fb.group({
      subCategoryName:['',Validators.required],
      subCategoryDescription:['',Validators.required],
      imagePath:['',Validators.required],
    })

       
    this.category.getCategories().subscribe(res=>{
      this.categories=res.data;
      console.log(this.categories);
      
    })

    const id = this.activatedRoute.snapshot.params['id'];   

    this.category.getSubCategoryById(id).subscribe(res=>{
      this.SubCategoryFromDatabase=res.data;
     console.log(this.SubCategoryFromDatabase);
    })
   }

  ngOnInit(): void {
  }

  onAddingSubCategory(){
       
    if(this.editSubCategory.valid){
      // const isActive:boolean=false;
      const formData = new FormData();
      // (this.editProductForm.value.productCode !='')?this.editProductForm.value.productCode:this.ProductFromDatabase.productCode
      formData.append('categoryName', (this.editSubCategory.value.categoryName !=''?this.editSubCategory.value.categoryName:this.SubCategoryFromDatabase.categoryName));
      formData.append('categoryDescription', (this.editSubCategory.value.categoryDescription !=''?this.editSubCategory.value.categoryDescription:this.SubCategoryFromDatabase.categoryDescription));
      formData.append('image', this.photo);
    
      // console.log(this.productObj);
    
       this.category.updateCategory(formData,this.activatedRoute.snapshot.params['id'])
       .subscribe(res=>{
        this.toast.success({detail:"success", summary:"Category Updated Successfully!"});

       },err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
       }
       )
    }
    else{
      ValidateForm.validateAllFormFields(this.editSubCategory);
    }
  }
  
  onFileSelect(event: any) {
    this.photo=  <File>event.target.files[0];
    console.log(this.photo);
    
    }

}

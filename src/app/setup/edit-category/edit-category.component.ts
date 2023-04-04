import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
 
  editCategory!:FormGroup;
  categoryObj !: Product ;
  Category:any;
  SubCategory:any;
  filteredSubCategory:any[]=[];
  CategoryFromDatabase:any;
  
  photo!:File;

  constructor(
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private category:CategoriesService,
    private toast:NgToastService
  ) {
    
    this.editCategory=this.fb.group({
      categoryName:[''],
      categoryDescription:[''],
      imagePath:[''],
    })

    const id = this.activatedRoute.snapshot.params['id'];   

    this.category.getCategoryById(id).subscribe(res=>{
      this.CategoryFromDatabase=res.data;
     console.log(this.CategoryFromDatabase);
    })
   }

  ngOnInit(): void {
  }

  onAddingCategory(){
       
    if(this.editCategory.valid){
      const formData = new FormData();
      // (this.editProductForm.value.productCode !='')?this.editProductForm.value.productCode:this.ProductFromDatabase.productCode
      formData.append('categoryName', (this.editCategory.value.categoryName !=''?this.editCategory.value.categoryName:this.CategoryFromDatabase.categoryName));
      formData.append('categoryDescription', (this.editCategory.value.categoryDescription !=''?this.editCategory.value.categoryDescription:this.CategoryFromDatabase.categoryDescription));
      formData.append('image', this.photo);
    
    
       this.category.updateCategory(formData,this.activatedRoute.snapshot.params['id'])
       .subscribe(res=>{
        this.toast.success({detail:"success", summary:"Category Updated Successfully!"});

       },err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
       }
       )
    }
    else{
      ValidateForm.validateAllFormFields(this.editCategory);
    }
  }
  
  onFileSelect(event: any) {
    this.photo=  <File>event.target.files[0];
    console.log(this.photo);
    
    }

}

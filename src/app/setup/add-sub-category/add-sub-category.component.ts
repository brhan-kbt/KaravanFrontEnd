import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {


  categories:any;
  addSubCategory!:FormGroup;
  photo!:File;
  constructor(
    private fb:FormBuilder,
    private toast:NgToastService,
    private cat:CategoriesService,
    private category:CategoriesService
  ) { }

  ngOnInit(): void {

    this.addSubCategory=this.fb.group({
      subCategoryName:['',Validators.required],
      subCategoryDescription:[''],
      categoryId:['',Validators.required],
      imagePath:[''],
      productcts:[],
    })

    // "subCategoryName": "PACKAGING",
    // "subCategoryDescription": "",
    // "image": null,
    // "imagePath": "http://karavancoffee2-001-site1.dtempurl.com/Images/Products/NoPicture.jpg",
    // "categoryId": 9

    this.category.getCategories().subscribe(res=>{
      const cat=res.data;
      this.categories=cat;

      console.log(this.categories);

    })
  }


  onAddingSubCategory(){

    if(this.addSubCategory.valid){

      const formData = new FormData();
      formData.append('subCategoryName', this.addSubCategory.value.subCategoryName);
      formData.append('categoryId', this.addSubCategory.value.categoryId);
      formData.append('subCategoryDescription', this.addSubCategory.value.subCategoryDescription);
      formData.append('image', this.photo);

       this.cat.saveSubCategory(formData)
       .subscribe(res=>{
        this.toast.success({detail:"success", summary:"Category Added Successfully!"});

       },err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
       }
       )
    }
    else{
      ValidateForm.validateAllFormFields(this.addSubCategory);
    }
  }

  onFileSelect(event: any) {
    this.photo=  <File>event.target.files[0];
    console.log(this.photo);

    }
}

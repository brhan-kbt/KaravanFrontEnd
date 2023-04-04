import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm !: FormGroup;
  productObj !: Product ;
  Category:any;
  SubCategory:any;
  filteredSubCategory:any[]=[];
  photo!:File;

  constructor(private fb: FormBuilder,
              private serv: ProductService,
              private toast:NgToastService,
              private category:CategoriesService
    ) { 

      category.getCategories().subscribe(res=>{
        this.Category=res.data;
        console.log(this.Category);
        
      })

      category.getSubCategories().subscribe(res=>{
        this.SubCategory=res.data;
        // this.filteredSubCategory=this.SubCategory;
        console.log(this.SubCategory);
        
      })
    }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productName:['', Validators.required],
      productCode:['', Validators.required],
      imagePath:['', Validators.required],
      unitPrice:['', Validators.required],
      productCategory:['', Validators.required],
      productSubCategory:['', Validators.required],
      productDescription:['', Validators.required],
      mainIngredients:[''],
      quantity:[''],
      rating:['', Validators.required],
      discount:['', Validators.required],
      productPoint:['', Validators.required],
    })
  }
  getcompanyid(e:any){
    let id= e.target.value;
      console.log(id);
      
    this.filteredSubCategory = this.SubCategory
    .filter((a:any)=>{
      if(a.categoryId == id){
        return a;
      }
    })

   
  }

  onFileSelect(event: any) {
    this.photo=  <File>event.target.files[0];
    console.log(this.photo);
    
    }
  onAddingProduct(){
    
    if(this.addProductForm.valid){
      // const isActive:boolean=false;
      const formData = new FormData();
      formData.append('productName', this.addProductForm.value.productName);
      formData.append('productCode',this.addProductForm.value.productCode);      
      formData.append('productDescription', this.addProductForm.value.productDescription);      
      formData.append('unitPrice', this.addProductForm.value.unitPrice);      
      formData.append('mainIngredients', this.addProductForm.value.mainIngredients);
       formData.append('active', 'false');      
       formData.append('requireExtra','false');      
       formData.append('discount', '0');      
       formData.append('productPoint', "0");
       formData.append('rating', "4.5");      
       formData.append('totalOrdered', "0");      
      formData.append('image', this.photo);      
      formData.append('imagePath', this.photo);
      formData.append('categoryId', this.addProductForm.value.productCategory);      
      formData.append('subCategoryId', this.addProductForm.value.productSubCategory);      
      
      this.productObj=this.addProductForm.value;
      this.productObj.active=false;
      this.productObj.requireExtra=false;
      this.productObj.totalOrdered=0;
      this.productObj.imagePath ="../../../../assets/assets/images/karavan-images/cakes/image-85.jpg";

      console.log(this.productObj);
      
      
      // console.log(this.productObj);
    
       this.serv.saveProduct(formData)
       .subscribe(res=>{
        this.toast.success({detail:"success", summary:"Product Added Successfully!"});

       },err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
       }
       )
    }
    else{
      ValidateForm.validateAllFormFields(this.addProductForm);
    }
  }
}

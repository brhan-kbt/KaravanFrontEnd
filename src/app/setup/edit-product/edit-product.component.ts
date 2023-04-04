import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

editProductForm!:FormGroup;
productObj !: Product ;
Category:any;
SubCategory:any;
filteredSubCategory:any[]=[];

ProductFromDatabase:any;

photo!:File;

  constructor(
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private product:ProductService,
    private toast:NgToastService,
    private cat:CategoriesService
  ) { }

  ngOnInit(): void {
    this.editProductForm = this.fb.group({
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
    const id = this.activatedRoute.snapshot.params['id'];   
    this.product.getProductbyId(id).subscribe(res=>{
      this.ProductFromDatabase=res.data;
     console.log(this.ProductFromDatabase);
    })

    this.cat.getCategories().subscribe(res=>{
      this.Category=res.data;
    })
    
    this.cat.getSubCategories().subscribe(res=>{
      this.SubCategory=res.data;

      console.log(this.SubCategory);
      
    })
    
  }

  onFileSelect(event:any){
    this.photo=  <File>event.target.files[0];
    console.log(this.photo);
  }
  getcompanyid(id:any){

  }
  onAddingProduct(){
    console.log(this.editProductForm.value);
    console.log(this.editProductForm.value.productName);

    
    const formData = new FormData();
    
    formData.append('productCode', (this.editProductForm.value.productCode !='')?this.editProductForm.value.productCode:this.ProductFromDatabase.productCode);
    formData.append('productName', (this.editProductForm.value.productName !='')?this.editProductForm.value.productName:this.ProductFromDatabase.productName);      
    formData.append('productDescription', (this.editProductForm.value.productDescription !='')?this.editProductForm.value.productDescription:this.ProductFromDatabase.productDescription);      
    formData.append('unitPrice', (this.editProductForm.value.unitPrice !='')?this.editProductForm.value.unitPrice:this.ProductFromDatabase.unitPrice);       
    formData.append('mainIngredients',  (this.editProductForm.value.mainIngredients !='')?this.editProductForm.value.mainIngredients:this.ProductFromDatabase.mainIngredients);
    formData.append('active', 'false');      
    formData.append('requireExtra','false');      
    formData.append('discount', '0');      
    formData.append('productPoint', "0");
    formData.append('rating', "4.5");      
    formData.append('totalOrdered', "0");      
    formData.append('image', this.photo);      
    formData.append('imagePath', this.photo);
    formData.append('categoryId', '1');      
    formData.append('subCategoryId', '1');  
    
    this.product.updateProduct(formData, this.activatedRoute.snapshot.params['id'])
       .subscribe(res=>{
        this.toast.success({detail:"success", summary:"Product Updated Successfully!"});

       },err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
       }
       )
  }
}

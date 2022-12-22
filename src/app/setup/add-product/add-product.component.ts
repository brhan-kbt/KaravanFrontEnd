import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm !: FormGroup;
  productObj !: Product ;

  constructor(private fb: FormBuilder,
              private serv: ProductService,
              private toast:NgToastService
    ) { }

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

  onAddingProduct(){
    
    if(this.addProductForm.valid){
      // alert(this.addProductForm.value);
      // console.log(this.addProductForm.value.productName);
      
      // console.log(this.addProductForm.value);
      // this.productObj.id=1,
      
      this.productObj=this.addProductForm.value;
      this.productObj.active=false;
      this.productObj.requireExtra=false;
      this.productObj.totalOrdered=0;
      this.productObj.imagePath ="../../../../assets/assets/images/karavan-images/cakes/image-85.jpg";

      console.log(this.productObj);
      
      
      // console.log(this.productObj);
    
       this.serv.saveProduct(this.productObj)
       .subscribe(res=>{
        this.toast.success({detail:"success", summary:"Product Added Successfully!"});

       },err=>{
        this.toast.success({detail:"success", summary:"Product Added Successfully!"});
       }
       )
    }
    else{
      ValidateForm.validateAllFormFields(this.addProductForm);
    }
  }
}

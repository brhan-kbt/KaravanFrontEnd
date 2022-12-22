import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  addProductForm !: FormGroup;

  constructor(private fb: FormBuilder,
              private serv: ProductService
    ) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productName:['', Validators.required],
      imagePath:['', Validators.required],
      unitPrice:['', Validators.required],
      category:['', Validators.required],
      sub_category:['', Validators.required],
      description:['', Validators.required],
      keyword:[''],
      quantity:[''],
      rating:['', Validators.required],
      discount:['', Validators.required],
      productPoint:['', Validators.required],
    })
  }

  onAddingMenu(){
    
  }
 
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Product[]=[];
  constructor(
    private serv: ProductService
  ) {
    serv.getProducts()
    .subscribe((res)=>{
      this.productList =res;
       console.log(this.productList);
    })
   }

  ngOnInit(): void {
    
  }

}

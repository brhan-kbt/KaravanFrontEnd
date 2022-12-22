import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {


  product :any;
  constructor(
    private route:ActivatedRoute,
    private prodServ: ProductService,
    private cartServ:CartService
    ) { }

 

  ngOnInit(): void {

    const id= this.route.snapshot.params['id'];
    // this.product= this.prodServ.getProduct(id);
    this.prodServ.getProductbyID(id)
        .subscribe((res)=>{
          this.product = res;
          this.product.quantity =1;
          console.log(this.product);
        })
   
    
  }

  increasequantity(){
        + this.product.quantity++;
  }

  decreasequantity(){
    + this.product.quantity--;
  }

  addToCart(prod:Product){
       this.cartServ.addItem(prod);   
  }

}

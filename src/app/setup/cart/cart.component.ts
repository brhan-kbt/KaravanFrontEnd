import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:Product[]=[];
  total:number=0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.cartitems.subscribe(data=>{
      this.items=data;
      
      if(this.items){
        this.getTotal(this.items)
      }
    })
  }

  onDelete(i:number){

    this.items.splice(i, 1);
    this.cartService.setCartData(this.items)
    this.getTotal(this.items)

  }

  validateInput(event:any, i:number){

    const qty = + event.target.value;
    if(qty<1){
      event.target.value = this.items[i].quantity;
      return;
    }
    this.QuantityUpdated(qty, i);
  }
  QuantityUpdated(qty:number, i:number){

    this.items[i].quantity=qty;
    this.cartService.setCartData(this.items);
    this.getTotal(this.items)

  }

  getTotal(data:any){
    let subs=0;
    for(const item of data){
      subs += item.unitPrice * item. quantity;
      this.total=subs;
    }
  }

}


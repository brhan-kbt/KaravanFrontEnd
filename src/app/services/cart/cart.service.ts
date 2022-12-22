import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';
// import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  placeholder:Product[] =[];
  // cartItems:Product[]=[];
  // numOfItems= new BehaviorSubject<Product[]>([]);
  cartitems= new BehaviorSubject<Product[]>([]);
  constructor() {
    const ls = JSON.parse(localStorage.getItem('cart')!);
    this
    if(ls){
      this.cartitems.next(ls);
    }
   }

  addItem(product:Product){
    const ls = JSON.parse(localStorage.getItem('cart')!);
    

    let exist !:Product;

    if(ls)
      exist = ls.find((item:Product)=>{
        return item.productCode==product.productCode;
        
      });

    if(exist){
      exist.quantity++;
     localStorage.setItem('cart', JSON.stringify(ls));
     console.log("Product Exist");
     
    }else{
      if(ls){
      const newData= [...ls, product];
      localStorage.setItem('cart', JSON.stringify(newData));
      this.cartitems.next(JSON.parse(localStorage.getItem('cart')!));
     console.log("Product is the first");

      }
      else{
        this.placeholder.push(product);
        localStorage.setItem('cart', JSON.stringify(this.placeholder));
        this.cartitems.next(this.placeholder);
         console.log("Product Added");

      }
    }
  }

  setCartData(data:Product[]){
    localStorage.setItem('cart', JSON.stringify(data));
  }
}

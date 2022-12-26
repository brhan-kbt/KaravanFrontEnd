import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Product2 } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {


  product :any;
  products:Product2[]=[];
  products2:Product2[]=[];
  relatedProduct:Product[]=[];
  relatedP:Product[]=[];
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private prodServ: ProductService,
    private cartServ:CartService,
    private serv:ProductService
    ) {
      this.products= serv.getAll();
      this.products2=this.products.filter(p=>p.type.includes('lu-din'));

     }

 

  ngOnInit(): void {

    const id= this.route.snapshot.params['id'];
    // this.product= this.prodServ.getProduct(id);
   
    this.prodServ.getProductbyID(id)
        .subscribe((res)=>{
          this.product = res;
          this.product.quantity =1;
          console.log(this.product.productCategory);
        })

        this.prodServ.getProducts().subscribe((res:any)=>{
              this.relatedP = res;
              console.log(this.relatedP);
              
      })

      this.relatedProduct =  this.relatedP .filter((a:any)=>{
        if(a.productCategory==this.product.productCategory){
          return a;
        }
      })
    
  }

  orderdetails(code:string){
    this.router.navigate(['/order/' + code]);
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

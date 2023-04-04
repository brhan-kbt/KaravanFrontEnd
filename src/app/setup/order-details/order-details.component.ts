import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Product, Product2 } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { RatingService } from 'src/app/services/rating/rating.service';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  reviews = [
    { author: 'John', rating: 4, comment: 'This is a great product!' },
    { author: 'Mary', rating: 5, comment: 'I love this product. Highly recommended!' },
    { author: 'Tom', rating: 3, comment: 'It\'s okay, but could be better.' }
  ];

  product !:any;
  products:Product2[]=[];
  products2:Product2[]=[];
  relatedProduct:Product[]=[];
  relatedP:Product[]=[];
  ingredients:any;
  data:any;
  public ratingValue: number = 0;
  public comment: string = '';

  ratingForm!:FormGroup;
  id:any;
  message:any;

  // subCatId:any;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private prodServ: ProductService,
    private cartServ:CartService,
    private serv:ProductService,
    private cat:CategoriesService,
    private fb:FormBuilder,
    private store:UserStoreService,
    private auth:UserService,
    private ratingServ:RatingService,
    private toast:NgToastService
    ) {

      this.ratingForm=this.fb.group({
        rating:[''],
        review:['', Validators.required],
        productId: [''],
        customerId: ['']
      })
      this.products= serv.getAll();
      this.products2=this.products.filter(p=>p.type.includes('lu-din'));

      prodServ.getIngredients().subscribe(res=>{
        this.ingredients = res.data;
        console.log(this.ingredients);
      })

      const that=this;
      this.store.getIdFromStore()
      .subscribe(val=>{
        const FromToken=this.auth.getIdFromToken();
        that.id=val||FromToken;
        that.onSubmittingRating();
      })
    }

   
    
 

  ngOnInit(): void {

    const id= this.route.snapshot.params['id'];
       const  subCatId=this;
    this.prodServ.getProductbyId(id)
        .subscribe((res)=>{
          this.product = res.data;
          this.product.quantity =1;
           const catSubId=this.product['subCategoryId'];
           
            subCatId.data=catSubId;
          //  console.log(this.data + 'From INSIDE');

           this.getRelatedProduct();
          // return this.subCatId;
          // console.log(this.product);

        })

      
        // console.log(this.data + 'From OUTSIDE');
        // console.log(this.product);

        this.prodServ.getProducts().subscribe((res:any)=>{
              // this.relatedP = res;
              // console.log(this.relatedP);
              
      })

      this.relatedProduct =  this.relatedP .filter((a:any)=>{
        if(a.productCategory==this.product.productCategory){
          return a;
        }
      })
    
  }
  getRelatedProduct(){
    this.cat.getRelatedProduct(this.data).
    subscribe((res)=>{
      this.relatedP=res.data.products;
      //  console.log(this.relatedP);
      
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
    console.log(prod);
    
       this.cartServ.addItem(prod);   
  }


 
  setRating(rating: number): void {
    this.ratingValue = rating;
  }

  getStarColor(index: number): string {
    if (this.ratingValue >= index) {
      return 'text-warning';
    } else {
      return 'text-secondary';
    }
  }

  onSubmittingRating(){
    // Do something with the rating and comment, like submitting it to a server
    this.ratingForm.value.customerId =this.id;
    this.ratingForm.value.productId =this.route.snapshot.params['id'];
    this.ratingForm.value.rating=this.ratingValue;

  if(this.ratingForm.valid){
    console.log(this.ratingForm.value);
    
    this.ratingServ.saveRating(this.ratingForm.value).subscribe(res=>{
      this.toast.success({detail:"success", summary:"Rated Successfully!"});

    } 
    , err=>{
      // this.toast.error({detail:"error", summary:"Something Went Wrong!"});
      this.message=err.error.message;
    }
    )
  }
  else{
    ValidateForm.validateAllFormFields(this.ratingForm);
  }
  }

}

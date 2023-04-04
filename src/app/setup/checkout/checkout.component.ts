import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Product } from 'src/app/models/product';
import { BranchService } from 'src/app/services/branch/branch.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  inCart:Product[]=[];
  total:number=0;
  redeemedPoints:number=0;
  form=false;
  today=new Date();
  tomorrow =  new Date(this.today.setDate(this.today.getDate() + 1));
  

  checkoutForm!:FormGroup;
  payment=false;
  id:any;
  branches:any;
  constructor(
    private cartService: CartService,
    private fb:FormBuilder,
    private user:UserService,
    private store:UserStoreService,
    private branch:BranchService,
    private order:OrderService,
    private toast:NgToastService
  ) { 
    
    
  }

  ngOnInit(): void {
    this.checkoutForm =this.fb.group({
      branchId:['', Validators.required],
      pickupDateTime: ['', Validators.required],
      remark:[''],
      orderType: "online",
      paymentMode: 'chapa',
      orderStatus: "pending",
      orderDateTime: [''],
      totalPrice: [''],
      redeemedPoints: [''],
      orderBy: [''],
      orderDetails: [{
          quantity: [''],
          productId: [''],
          loyalityDetails: {
            loyalityPoint: [''],
            }      
      }],
    })
    const that = this;
    this.store.getIdFromStore()
    .subscribe(val=>{
      const FromToken=this.user.getIdFromToken();
      that.id=val||FromToken;
      //  that.assignId();
    })

    this.branch.getBranches().subscribe(res=>{
      this.branches=res.data;
      console.log(this.branches);
      
    })

      this.today.getDate() + 1;
  
      this.cartService.cartitems.subscribe(data=>{
        this.inCart=data;
        if(this.inCart){
          this.getTotal(this.inCart);
        }
      })
  }


  getTotal(data:any){
    let subs=0;
    let point=0;
    for(const item of data){
      subs += item.unitPrice * item.quantity;
      point +=item.productPoint;
      this.total = subs;
      this.redeemedPoints=point;
    }
  }

  formcheck(){
    console.log(this.checkoutForm.value.checkoutemail);
   if(this.checkoutForm.value.checkoutemail){
    this.form = !this.form;
   }

   else{
     this.checkoutForm.controls['checkoutemail'].markAsDirty();
   }
}

onChangingPayment(){
  if(this.checkoutForm.valid){
    this.payment= !this.payment;
  }
  else{
    ValidateForm.validateAllFormFields(this.checkoutForm);
  }
}

onOrdering(){
  const result = this.inCart.map((item) => ({
    productId: item.productId,
    quantity: item.quantity,
    messageOnCake:'HBD',
    loyalityDetails: {
      loyaltyPoint: item.productPoint
    }
  }));
  
  this.checkoutForm.value.orderDateTime=new Date().toISOString();
  this.checkoutForm.value.orderBy=this.id;
  this.checkoutForm.value.orderDetails=result;
  this.checkoutForm.value.totalPrice=this.total;
  this.checkoutForm.value.redeemedPoints=this.redeemedPoints;
  console.log(this.checkoutForm.value);

  if(this.checkoutForm.valid){
    console.log(this.checkoutForm.value);
    
       this.order.saveOrder(this.checkoutForm.value).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Ordered Successfully!"});
        localStorage.removeItem('cart');
        this.inCart=[];
        this.total=0;
        this.checkoutForm.reset();
        

      } 
      , err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
        console.log(err);
      }
      )
    }
    else{
      ValidateForm.validateAllFormFields(this.checkoutForm);
    }
}

}

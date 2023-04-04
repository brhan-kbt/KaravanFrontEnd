import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-detail-list.component.html',
  styleUrls: ['./order-detail-list.component.css']
})
export class OrderDetailListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  orderDetailList:any;
  id!:string;
  orders:any;
  fullName!:string;
  email!:string;
  phoneNumber!:string;
  orderdetail:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private order:OrderService,
    private store:UserStoreService,
    private user:UserService
  ) {
    this.id=activatedRoute.snapshot.params['id'];
        console.log(this.id);
        // order.getOrderDetailById(this.id).subscribe(res=>{
        //   this.orderDetailList=res.data;
        // })

        order.getOrder().subscribe(res=>{
          this.orderDetailList=res.data;
          // this.dtTrigger.next(this.orderDetailList);
        })
   
   
        const that = this;
        this.store.getIdFromStore()
        .subscribe(val=>{
          const FromToken=this.user.getIdFromToken();
          that.id=val||FromToken;
          that.getOrder();
        })
            

        
   }

  ngOnInit(): void {
  }

  getOrder(){
    console.log(this.id);
    this.order.getOrderByOrderId(this.activatedRoute.snapshot.params['id']).subscribe(res=>{
      this.orders=res.data;
      this.fullName= this.orders[0].customer.fullName;
      this.email= this.orders[0].customer.email;
      this.phoneNumber= this.orders[0].customer.phoneNumber;
      
      this.filter(this.orders);
    })
  }

  filter(orders:any){
    const od = orders
    .filter((a:any)=>{
      if(a.id == this.activatedRoute.snapshot.params['id']){
        return a.orderDetails;
        
      }
    });

    this.orderdetail=od[0].orderDetails;
    this.dtTrigger.next(this.orderdetail);
    // console.log(this.orderdetail);
    
  }
}

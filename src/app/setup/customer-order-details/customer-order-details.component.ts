import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-customer-order-details',
  templateUrl: './customer-order-details.component.html',
  styleUrls: ['./customer-order-details.component.css']
})
export class CustomerOrderDetailsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id:any;
  orderdetail:any;
  orders:any;
  constructor(
    private user:UserService,
    private store:UserStoreService,
    private order:OrderService,
    private activatedRoute:ActivatedRoute
  ) {

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
    this.order.getOrderByCustomerId(this.id).subscribe(res=>{
      this.orders=res.data;
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
    console.log(this.orderdetail);
    
  }
}

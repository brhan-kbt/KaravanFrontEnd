import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id:any;
  orders:any;
  constructor(
    private user:UserService,
    private store:UserStoreService,
    private order:OrderService
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
      console.log(this.orders);
      
      this.dtTrigger.next(this.orders);
    })
  }
}

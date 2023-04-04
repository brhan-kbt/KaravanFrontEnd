import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  orderList:any;
  userlist:any;
  constructor(
    private order:OrderService,
    private user:UserService
  ) { 

  }

  ngOnInit(): void {
    this.order.getOrder().subscribe(res=>{
      this.orderList=res.data;
      this.dtTrigger.next(this.orderList);
      
      // this.getBRANCH();
    })
  }

  ngDestroy(){
    this.dtTrigger.unsubscribe();
  }
}

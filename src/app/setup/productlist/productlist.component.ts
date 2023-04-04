import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  productList: Product[]=[];
  dtOptions:any;
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private serv: ProductService
  ) {

   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
          {
            extend: 'print',
            text: 'Print',
            className: 'btn btn-primary btn-sm'
          },
          {
            extend: 'csv',
            text: 'CSV',
            className: 'btn btn-primary btn-sm'
          },
          {
            extend: 'excel',
            text: 'Excel',
            className: 'btn btn-primary btn-sm'
          }
        ]
    };
   
    this.serv.getProducts()
    .subscribe((res)=>{
      this.productList =res.data;
      this.dtTrigger.next(this.productList);
       console.log(this.productList);
    })

   
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}

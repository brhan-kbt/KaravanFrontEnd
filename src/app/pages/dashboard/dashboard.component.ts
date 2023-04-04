import { Component, OnInit, ElementRef } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  prods !: any;
  name: string ='';
  constructor(private elementRef: ElementRef,
     private servV:ProductService,
    private userStore: UserStoreService,
    private user:UserService
      ) { 
    servV.getProductsFoTesting().subscribe((res)=>{
      this.prods=res;
      console.log(this.prods);
    })

    // console.log(user.getFullNameFromToken());

    userStore.getFullnameFromStore().subscribe((val)=>{
      const fullNameFromToken= user.getFullNameFromToken();
      this.name=val || fullNameFromToken;
      console.log(this.name);
    })
  }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, Product2 } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products:Product2[]=[];
  filteredProducts:Product[]=[];
  products1:Product2[]=[];
  products2:Product2[]=[];
  productList: Product[]=[];
  addForm !:Product;
  pages:number =1;
  productCat:string='';
  

  constructor(
              private serv:ProductService,
              private router:Router
              
              ) { 
        this.products=serv.getAll();
        this.products1=this.products.filter(p=>p.type.includes('popular'));
        this.products2=this.products.filter(p=>p.type.includes('lu-din'));

        serv.getProducts()
        .subscribe((res)=>{
          this.productList =res;
          this.filteredProducts=this.productList;
          // console.log(this.productList);
          console.log(this.filteredProducts);
          
        })
  }



  ngOnInit(): void {
     
        
  }

  filter(category:string){
    this.filteredProducts = this.productList
    .filter((a:any)=>{
      if(a.productSubCategory == category || a.productCategory==category){
        return a;
      }
    })
  }

  addToProduct(){

      // this.addForm.id= 17,
      // this.addForm.quantity=1,
      // this.addForm.category="cakes",
      // this.addForm.chef="Berhan",
      // this.addForm.price=12,
      // this.addForm.title="New Product",
      // this.addForm.type="lu-din"
      // this.addForm.description="New description"
      // this.addForm.imageUrl="../../../../assets/assets/images/karavan-images/cakes/image-90.jpg"

      // alert(this.addForm);
      

      this.serv.saveProduct(this.addForm)
            .subscribe(res=>{
              console.log(res);
              alert("Saved")
              
            }
            )
  }

  orderdetails(id:string){
    this.router.navigate(['/order/' + id]).then
    (()=>{
      window.location.reload();
    });

  }
  
  filtercat(category:string){
    this.filteredProducts = this.productList
    .filter((a:any)=>{
      if(a.productCategory == category || category==''){
        this.productCat = category;
        return a;
      }
    })
  }
}

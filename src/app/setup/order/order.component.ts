import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prod, Product, Product2, ProductToBeOrdered } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products:Product2[]=[];
  filteredCakes:Product[]=[];
  filteredCake:Product[]=[];

  filteredFoods:Product[]=[];
  filteredFood:Product[]=[];

  products1:Product2[]=[];
  products2:Product2[]=[];
  productList: Product[]=[];
  addForm !:Product;
  pages:number =1;
  productCat:string='';
  productToBeOrdered!:ProductToBeOrdered;
  prod!:any;
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
          this.filteredCakes=this.productList;
          // console.log(this.filteredCakes + "Filtered Products");
        })

        serv.getProductToBeOrdered().subscribe(res=>{
          
          this.productToBeOrdered=res;
          this.prod= this.productToBeOrdered.data;

          this.filteredCake = this.prod[2].products;
          this.filteredCakes = this.filteredCake;

          this.filteredFood = this.prod[4].products;
          this.filteredFoods = this.filteredFood;
           console.log(this.prod);
           console.log(this.filteredCakes);
         
          
          // console.log(this.productToBeOrdered);
          
        })
  }



  ngOnInit(): void {
     
        
  }

  filter(category:string){
    this.filteredCakes = this.productList
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

  orderdetails(id:number){
    this.router.navigate(['/order/' + id]);
    }
  
  filtercake(category:number){
    console.log(category);
    
    this.filteredCakes = this.filteredCake
    .filter((a:any)=>{
      if(a.subCategoryId == category || category==0){
        return a;
      }
    })
  }

  filterfood(category:number){
    console.log(category);
    
    this.filteredFoods = this.filteredFood
    .filter((a:any)=>{
      if(a.subCategoryId == category || category==0){
        console.log(a)
        return a;
      }
    })
  }
}


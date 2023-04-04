import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product, Product2 } from 'src/app/models/product';
// import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product:Product2[]=[
    {
    id:1,
    productCode:"",

    quantity:1,
    title:"Mexico Beafsteak",
    description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
    price:25.0,
    imageUrl:"../../../../assets/assets/images/karavan-images/cakes/image-88.jpg",
    chef:"John Doe",
    type:"popular",
    category:"cakes",
    },

    {
     id:2,
     productCode:"", 
         quantity:1,

     title:"Mexico Beafsteak",
      description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
     price:5.0,
      imageUrl:"../../../../assets/assets/images/karavan-images/cakes/image-76.jpg",
      chef:"John Doe",
      type:"popular",
      category:"cakes",
    },

    {
      id:3,
      productCode:"", 
          quantity:1,

      title:"Madagasca Lopster",
      description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
      price:20.0,
      imageUrl:"../../../../assets/assets/images/karavan-images/cakes/image-100.jpg",
      chef:"John Doe",
      type:"popular",
      category:"cakes",
    },

    {
     id:4,
     productCode:"", 
         quantity:1,

     title:"Jambon Salad",
      description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
     price:45.0,
      imageUrl:"../../../../assets/assets/images/karavan-images/drinks/image-6.jpg",
      chef:"John Doe",
      type:"popular",
      category:"drinks",
    },


    {
     id:5,
     productCode:"", 
         quantity:1,

     title:"Mexico Beafsteak",
      description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
     price:5.0,
      imageUrl:"../../../../assets/assets/images/karavan-images/drinks/image-10.jpg",
      chef:"John Doe",
      type:"popular",
      category:"drinks",
      },
  
      {
     id:6,
     productCode:"", 
         quantity:1,

       title:"Mexico Beafsteak",
        description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
       price:25.0,
        imageUrl:"../../../../assets/assets/images/karavan-images/foods/image-1.jpg",
        chef:"John Doe",
        type:"popular",
        category:"food",
      },
  
      {
     id:7,
     productCode:"", 
         quantity:1,

       title:"Madagasca Lopster",
        description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
       price:30.0,
        imageUrl:"../../../../assets/assets/images/karavan-images/foods/image-2.jpg",
        chef:"John Doe",
        type:"popular",
        category:"food",
      },
  
      {
     id:8,
     productCode:"", 
         quantity:1,

       title:"Mexico Beafsteak",
        description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
       price:15.0,
        imageUrl:"../../../../assets/assets/images/karavan-images/foods/image-11.jpg",
        chef:"John Doe",
        type:"popular",
        category:"food",
      },

      
      // luch and dinner

      {
     id:9,
     productCode:"", 
         quantity:1,

       title:"Jambon Salad Hot Bread",
        description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
       price:45.0,
        imageUrl:"../../../../assets/assets/images/karavan-images/foods/image-12.jpg",
        chef:"John Doe",
        type:"lu-din",
        category:"food",      
      },
    
        {
     id:10,
     productCode:"",
         quantity:1,

         title:"Mexico Beafsteak Potato",
          description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
         price:15.0,
          imageUrl:"../../../../assets/assets/images/karavan-images/foods/image-15.jpg",
          chef:"John Doe",
          type:"lu-din",
          category:"food",        },
    
        {
     id:11,
     productCode:"",
         quantity:1,

         title:"Madagasca Lopster Tasty",
          description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
         price:30.0,
          imageUrl:"../../../../assets/assets/images/karavan-images/drinks/image-9.jpg",
          chef:"John Doe",
          type:"lu-din",
          category:"drinks",        },
    
        {
     id:12,
     productCode:"",
         quantity:1,

          title:"Mexico Beafsteak Potato",
          description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
          price:15.0,
          imageUrl:"../../../../assets/assets/images/karavan-images/drinks/image-8.jpg",
          chef:"John Doe",
          type:"lu-din",
          category:"drinks",        },
    
    
        {
     id:13,
     productCode:"",
         quantity:1,

         title:"Mexico Beafsteak Potato fly",
          description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
         price:25.0,
          imageUrl:"../../../../assets/assets/images/karavan-images/cakes/image-90.jpg",
          chef:"John Doe",
          type:"lu-din",
          category:"cakes",        },
      
          {
     id:14,
     productCode:"",
         quantity:1,

           title:"Mexico Beafsteak Potato",
            description:"Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.",
           price:5.0,
            imageUrl:"../../../../assets/assets/images/karavan-images/cakes/image-85.jpg",
            chef:"John Doe",
            type:"lu-din",
            category:"cakes",          },
      

      

]
  constructor( private http: HttpClient ) { }

  getAll():Product2[]{
    return this.product;
  }
  
  getProducts(){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Product/")
          .pipe(map((res:any)=>{
            // console.log(res);
            return res;
          }))
  }

  getProductToBeOrdered(){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Category")
          .pipe(map((res:any)=>{
            // console.log(res);
            return res;
          }))
  }
  
  getRelatedProduct(id:any){
    // console.log(id);
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Category/"+ id)
          .pipe(map((res:any)=>{
            // console.log(res);
            return res;
          }))
  }
  

  saveProduct(data:any){
    console.log(data);
    
    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Product/", data)
            .pipe(map((res:any)=>{
              return res;
        }))
  }

 
  getProductbyId(id:number){
      return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Product/"+ id)
          .pipe(map((res:any)=>{
            return res;
          }))
  }
  updateProduct(data:any,id:number){
     return this.http.put<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Product/"+id,data)
          .pipe(map((res)=>{
             return res;
          }))
  }

  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/products"+id)
            .pipe(map((res:any)=>{
              return res;
            }))
  }
  


   getProductsFoTesting(){
     return this.http.get<any>("http://localhost:7080/api/Product")
           .pipe(map((res:any)=>{
             console.log(res);
             return res;
           }))
   }

  getProductbyID(id:string){
    return this.http.get<any>("http://zerubabela-001-site1.atempurl.com/api/Product")
          .pipe(map((res:any)=>{
           return res.find((x:any) => x.productCode === id);
          }))
  }



  getProduct(id:number){
    return this.product.find(p=>
      p.id===id
    );

  }


  getMenu(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  
  getIngredients(){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Ingredient")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}

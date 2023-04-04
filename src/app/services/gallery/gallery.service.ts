import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Gallery } from 'src/app/models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  cakes=[
    
    {
      'imagePath':'../../assets/assets/images/karavan-images/bg/cake1.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-26.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-27.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-28.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-29.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/bg/image-30.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/bg/image-31.jpg'
    }, 
    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-32.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-33.jpg'
    },


    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-34.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-35.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-36.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-37.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/bg/image-38.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/bg/image-39.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/bg/image-40.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/bg/image-41.jpg'
    }, 
    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-52.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/cakes/image-58.jpg'
    },

   
  ]

  foods=[
    
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-1.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-2.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-11.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-12.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-13.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-14.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-15.jpg'
    }, 
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-16.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-17.jpg'
    },


    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-18.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-19.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-20.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-21.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-22.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-23.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-24.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-25.jpg'
    }, 
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-42.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/foods/image-43.jpg'
    },

   
  ]

  coffee=[
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/11.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/22.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/33.jpeg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/44.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/4444.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/44444.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/55.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/55.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/5555.jpg'
    },
   


    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c9.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/drinks/image-6.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c9.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/drinks/image-7.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c10.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c9.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/drinks/image-8.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/drinks/image-9.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/11.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c9.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/drinks/image-10.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/cofffee/01 pic.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/cofffee/02 pic.jpg'
    }, 
    {
      'imagePath':'../../assets/assets/images/karavan-images/cofffee/03 pic.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/cofffee/04 pic.jpg'
    },


    {
      'imagePath':'../../assets/assets/images/karavan-images/cofffee/05 pic.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/cofffee/06 pic.jpg'
    },

    {
      'imagePath':'../../assets/assets/images/karavan-images/cofffee/07 pic.jpg'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c1.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c2.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c2.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c3.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c4.png'
    }, 
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c5.png'
    },
    {
      'imagePath':'../../assets/assets/images/karavan-images/coffee/c6.png'
    },

   
  ]
  constructor(private http:HttpClient) { }

  saveGallery(data:any){
    console.log(data);
    // const headers = new HttpHeaders().append(
    //   'Content-Disposition', 'multipart/form-data');
    //     headers.append('Content-Type', 'application/json');
    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Gallery", data)
            .pipe(map((res:any)=>{
              return res;
        }))
  }

 // updateProduct(data:any,id:number){
 //    return this.http.put<any>("http://localhost:3000/products"+id,data)
 //         .pipe(map((res)=>{
 //            return res;
 //         }))
 // }

 // deleteProduct(id:number){
 //   return this.http.delete<any>("http://localhost:3000/products"+id)
 //           .pipe(map((res:any)=>{
 //             return res;
 //           }))
 // }
 
   getGalleries(){
     return this.http.get<any>("https://fakestoreapi.com/products")
           .pipe(map((res:any)=>{
             return res;
           }))
   }

   getGalleriesForAdmin(){
     return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Gallery")
           .pipe(map((res:any)=>{
             return res;
           }))
   }

  getGallerybyId(id:number){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Gallery/"+ id)
        .pipe(map((res:any)=>{
          return res;
        }))
}

updateGallery(data:any,id:number){
  return this.http.put<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Gallery/"+id,data)
       .pipe(map((res)=>{
          return res;
       }))
}
 // getProductbyID(id:number){
 //   return this.http.get<any>("http://localhost:3000/products")
 //         .pipe(map((res:any)=>{
 //          return res.find((x:any) => x.id === id);
 //         }))
 // }



 // getProduct(id:number){

 //   return this.product.find(p=>
 //     p.id===id
 //   );

// }

getCakes(){
  return this.cakes;
}

getCoffee(){
  return this.coffee;
}
getFoods(){
  return this.foods;
}
}

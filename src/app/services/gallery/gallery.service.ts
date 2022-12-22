import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Gallery } from 'src/app/models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  saveGallery(data:Gallery){
    return this.http.post<any>("http://localhost:3000/gallery", data)
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
    return this.http.get<any>("http://localhost:3000/gallery")
          .pipe(map((res:any)=>{
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
}

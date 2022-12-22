import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  payloadData:any;
  constructor( private http: HttpClient) { 
    this.payloadData=this.decodedToken();
  }

   saveProduct(data:User){
    console.log(data);
     return this.http.post<any>("https://localhost:7080/api/Account/Register", data)
             .pipe(map((res:any)=>{
               return res;
         }));
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
  
   getProducts(){
     return this.http.get<any>("http://localhost:3000/users")
           .pipe(map((res:any)=>{
             return res;
           }))
   }

   login(data:any){
    console.log(data);
           return this.http.post<any>("https://localhost:7080/api/Account/Login", data)
             .pipe(map((res:any)=>{
              console.log(res);
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

   storeToken(tokenValue:string){
    localStorage.setItem('token', tokenValue);
   }

   getToken(){
    return localStorage.getItem('token');
   }


   isLoggedIn():boolean{
          return !!localStorage.getItem('token');
   }

   decodedToken(){
    const jwtHelper = new JwtHelperService(); 
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
   }


   getFullNameFromToken(){
      if(this.payloadData){
        return this.payloadData.exp;
      }
   }

   
   getRoleFromToken(){
    if(this.payloadData){
      return this.payloadData.role;
    }
   }


}

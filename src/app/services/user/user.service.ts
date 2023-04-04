import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { Response } from 'src/app/models/response';
import { TokenApiModel } from 'src/app/models/tokenApi.model';
import { post } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  payloadData:any;
  constructor( private http: HttpClient) { 
    this.payloadData=this.decodedToken();
  }


  getAllUsers(){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Account/GetUsers")
          .pipe(map((res:any)=>{
            return res;
          }))
  }
  saveUser(data:any) {
    // console.log(data);
    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Account/Register", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  //   return this.http.post('', data)
  //   .pipe(map((res)=>{
  //     return res;
      
  //  }))
    // .pipe(catchError(
    //   this.handleError
    //   ));
}

  handleError(error: HttpErrorResponse) {
    console.log(error)
      return throwError(error);
  }
 
  getUserbyId(id:any){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Account/"+ id)
          .pipe(map((res:any)=>{
            return res;
          }))
  }

  updateUser(data:any, id:any){
    return this.http.put<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Account/"+id,data)
    .pipe(map((res)=>{
       console.log(res);
       return res;
       
    }))
  }
  //  saveUser(data:User){
  //   console.log(data);
    
  //    return this.http.post<any>("http://zerubabela-001-site1.atempurl.com/api/Account/Register", data)
  //            .pipe(map((res:any)=>{
  //             console.log(res);
  //              return res;
  //        }));
  //  }

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
  // deleteUser(id:any){
  //   return this.http.delete<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Category/"+id)
  //              .pipe(map((res:any)=>{
  //                return res;
  //              }))
  // }
  

  
   getProducts(){
     return this.http.get<any>("http://localhost:3000/users")
           .pipe(map((res:any)=>{
             return res;
           }))
   }
//loginform.value
   login(data:any){
     
           return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Account/Login", data)
               .pipe(map((res:Response)=>{
                console.log(res);
                 return res;
           }));
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

   storeRefreshToken(tokenValue:string){
    localStorage.setItem('refreshToken', tokenValue);
   }

   getRefreshToken(){
    return localStorage.getItem('refreshToken');
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
        return this.payloadData.name;
      }
   }

   
   getImagePathFromToken(){
    if(this.payloadData){
      return this.payloadData.ImagePath;
    }
 }

   
   getRoleFromToken(){
    if(this.payloadData){
      return this.payloadData.role;
    }
   }
   getEmailFromToken(){
    if(this.payloadData){
      return this.payloadData.email;
    }   
   }

   getIdFromToken(){
    if(this.payloadData){
    return this.payloadData.Id;
    }   
   }
   renewToken(tokenApi:TokenApiModel){

    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Account/refreshtoken",tokenApi);

   }

}

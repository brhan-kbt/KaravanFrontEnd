import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http:HttpClient
  ) { }

  saveOrder(data:any){
    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Order/", data)
            .pipe(map((res:any)=>{
              return res;
        }))
  }

  getOrderDetailById(id:string){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/OrderDetail/"+ id)
        .pipe(map((res:any)=>{
          return res;
        }))
}
getOrder(){
  return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Order")
        .pipe(map((res:any)=>{
          // console.log(res);
          return res;
        }))
}
updateOrder(data:any,id:number){
   return this.http.put<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Order/"+id,data)
        .pipe(map((res)=>{
           return res;
        }))
}

deleteOrder(id:number){
  return this.http.delete<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Order/"+id)
          .pipe(map((res:any)=>{
            return res;
          }))
}

getOrderByCustomerId(id:string){
  return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Order/ByCustomer/"+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
}


getOrderByOrderId(id:string){
  return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Order/ByOrderId/"+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
}

}

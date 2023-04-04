import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http:HttpClient) { }

  getBranches(){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Branch")
          .pipe(map((res:any)=>{
            return res;
          }))
  }

  saveBranch(data:any){
    console.log(data);
    
    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Branch",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBranchbyId(id:number){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Branch/"+ id)
        .pipe(map((res:any)=>{
          return res;
        }))
    }

    updateBranch(data:any,id:number){
      return this.http.put<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Branch/"+id,data)
          .pipe(map((res)=>{
              return res;
          }))
    }
  
}

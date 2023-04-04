import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  

  saveCategory(data:any){
    console.log(data);
    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Category/", data)
            .pipe(map((res:any)=>{
              return res;
        }))
  }
  getCategories(){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Category")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  saveSubCategory(data:any){
    console.log(data);
    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/SubCategory/", data)
            .pipe(map((res:any)=>{
              return res;
        }))
  }
  getSubCategories(){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/SubCategory")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCategoryById(id:number){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Category/"+ id)
        .pipe(map((res:any)=>{
          return res;
        }))
}

getSubCategoryById(id:number){
  return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/SubCategory/"+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
}

updateSubCategory(data:any,id:number){
  return this.http.put<any>("http://karavancoffee2-001-site1.dtempurl.com/api/SubCategory/"+id,data)
       .pipe(map((res)=>{
          return res;
       }))
}
updateCategory(data:any,id:number){
  return this.http.put<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Category/"+id,data)
       .pipe(map((res)=>{
          return res;
       }))
}
  getRelatedProduct(id:any){
    return this.http.get<any>("http://karavancoffee2-001-site1.dtempurl.com/api/SubCategory/"+ id)
          .pipe(map((res:any)=>{
            // console.log(res);
            return res;
          }))
  }
  
  deleteCategory(id:number){
    return this.http.delete<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Category/"+id)
               .pipe(map((res:any)=>{
                 return res;
               }))
  }
}

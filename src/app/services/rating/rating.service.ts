import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(
    private http:HttpClient
  ) { }

  saveRating(data:any){
    return this.http.post<any>("http://karavancoffee2-001-site1.dtempurl.com/api/Rate/", data)
            .pipe(map((res:any)=>{
              return res;
        }))
  }
}

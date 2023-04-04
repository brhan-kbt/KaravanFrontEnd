import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { TokenApiModel } from '../models/tokenApi.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private serv:UserService, private toast:NgToastService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.serv.getToken();
     if(myToken){
       request = request.clone({
         setHeaders:
         {
           Authorization:`Bearer ${myToken}`
         }
       })
     }
    return next.handle(request).pipe(
      catchError((err:any)=>{
        if(err instanceof HttpErrorResponse){
            if(err.status ===401){
              // this.toast.warning({detail:"Warning", summary:"Token Expired Login agin!"});
              // this.router.navigate(['/login']);
            return this.handleUnAuthorizedError(request,next);
            }
              console.log(err);
              
        }
        return  throwError(()=> err);
      })
    );
  }

  handleUnAuthorizedError(req:HttpRequest<any>, next:HttpHandler){

    let tokenApiModel=new TokenApiModel();
   tokenApiModel.token=this.serv.getToken()!;
   tokenApiModel.refreshToken=this.serv.getRefreshToken()!;

  return this.serv.renewToken(tokenApiModel).pipe(
    switchMap((data:TokenApiModel)=>{
      this.serv.storeRefreshToken(data.refreshToken);
      this.serv.storeToken(data.token);
      req = req.clone({
        setHeaders:
        {
          Authorization:`Bearer ${data.token}`
          
        }
        
      })

      return next.handle(req)
    }),
    catchError((err)=>{
      return throwError(()=>{
        
          this.toast.warning({detail:"Warning", summary:"Token Expired Login agin!"});
          this.router.navigate(['/login']);
      })
    })
   )
  }
}

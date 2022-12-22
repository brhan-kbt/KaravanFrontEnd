import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

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
              this.toast.warning({detail:"Warning", summary:"Token Expired Login agin!"});
              this.router.navigate(['/login']);
            }
        }
        return  throwError(()=> new Error ("Some other error occured"));
      })
    );
  }
}

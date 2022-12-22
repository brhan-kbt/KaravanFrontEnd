import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:UserService, private router:Router, private toast:NgToastService){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      this.toast.error({detail:"Error", summary:'Please Login First!'});
      return false;
    }
  }
  
}

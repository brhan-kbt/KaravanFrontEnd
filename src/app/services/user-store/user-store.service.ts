import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullname$ = new BehaviorSubject<string>('');
  private role$ = new BehaviorSubject<string>('');
  constructor() { }

public getRoleFromStore(){
  return this.role$.asObservable();
}
public setRoleForStore(role:string){
  this.role$.next(role);
}

public getFullnameFromStore(){
  return this.fullname$.asObservable();
}
public setFullnameForStore(fullname:string){
  this.fullname$.next(fullname);
}
}

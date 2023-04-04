import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullname$ = new BehaviorSubject<string>('');
  private role$ = new BehaviorSubject<string>('');
  private imagePath$ = new BehaviorSubject<string>('');
  private email$ = new BehaviorSubject<string>('');
  private id$ = new BehaviorSubject<string>('');
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


public getImagePathFromStore(){
  return this.imagePath$.asObservable();
}
public setImagePathForStore(imagePath:string){
  this.imagePath$.next(imagePath);
}


public getEmailFromStore(){
  return this.email$.asObservable();
}
public setEmailForStore(email:string){
  this.email$.next(email);
}

public getIdFromStore(){
  return this.id$.asObservable();
}
public setIdForStore(id:string){
  this.id$.next(id);
}
}

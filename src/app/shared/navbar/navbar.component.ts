import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('body') container:any;
  socialFollow=false;
  itemInCart:number=0;
  open=false;
  logged:boolean=false;

  
  name:string ='';
  imagePath:string='';
  constructor(private router:Router, private cartServ: CartService, private el:ElementRef, private user:UserService,private store:UserStoreService, )
   {
    
    this.store.getFullnameFromStore()
    .subscribe(val=>{
      const FromToken= this.user.getFullNameFromToken();
      this.name=val||FromToken;
    })


    this.store.getImagePathFromStore()
    .subscribe(val=>{
      const FromToken= this.user.getImagePathFromToken();
      this.imagePath=val||FromToken;
    })
   }
  
  ngOnInit(): void {
    this.cartServ.cartitems.subscribe((d)=>{
      this.itemInCart=d.length;
      
    })


    this.logged=this.user.isLoggedIn();
    console.log(this.logged);
    
    
    window.onscroll = () =>{
      let cartItem=document.querySelector('.cart-items-container')!;
        cartItem.classList.remove('active');
        this.open=false;
    }
  }
  home(): void {
    this.router.navigate(['/welcome'])
    .then(() => {
      window.location.reload();
    });

  }


  order(): void {
    this.router.navigate(['/order'])
    .then(() => {
      window.location.reload();
    });

  }

  about(): void {
    this.router.navigate(['/about'])
    .then(() => {
      window.location.reload();
    });

  }

  product(): void {
    this.router.navigate(['/whykaravan'])
    .then(() => {
      window.location.reload();
    });

  }

  gallery(): void {
    this.router.navigate(['/gallery'])
    .then(() => {
      window.location.reload();
    });

  }

  register(){
    this.router.navigate(['/register'])
    .then(() => {
      window.location.reload();
    });
  }

  login(){
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    });
  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  changeVisibility()
  {
    this.socialFollow =! this.socialFollow;
  }

  menu(){

    console.log('Clicked ');
    this.open=true;
    let cartItem=document.querySelector('.cart-items-container')!;
    cartItem.classList.add('active');
    // navbar.classList.remove('active');
    // searchForm.classList.remove('active');
    
  }

  close(){
    this.open=false;
    let cartItem=document.querySelector('.cart-items-container')!;
    cartItem.classList.remove('active');
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemInCart:number=0;
  constructor(private router:Router, private cartServ: CartService) { }

  ngOnInit(): void {
    this.cartServ.cartitems.subscribe((d)=>{
      this.itemInCart=d.length;
      
    })
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


}

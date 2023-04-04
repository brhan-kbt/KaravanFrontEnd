import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { UserService } from 'src/app/services/user/user.service';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:string ='';
  imagePath:string='';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private auth:UserService,
    private store:UserStoreService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.store.getFullnameFromStore()
    .subscribe(val=>{
      const FromToken= this.auth.getFullNameFromToken();
      this.name=val||FromToken;
    })


    this.store.getImagePathFromStore()
    .subscribe(val=>{
      const FromToken= this.auth.getImagePathFromToken();
      this.imagePath=val||FromToken;
    })

  }
  sidebarToggle()
  {
    this.document.body.classList.toggle('toggle-sidebar');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}

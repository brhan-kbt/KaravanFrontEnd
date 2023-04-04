import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store/user-store.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  role !:string;
  constructor(private router:Router, private userStore:UserStoreService, private user:UserService) { }

  ngOnInit(): void {
     this.userStore.getRoleFromStore()
     .subscribe(val=>{
      const roleFromToken = this.user.getRoleFromToken();
      this.role = val || roleFromToken;
     })
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

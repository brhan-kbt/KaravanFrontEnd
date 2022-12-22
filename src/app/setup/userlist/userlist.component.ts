import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userList:User[]=[];

  constructor(private userServ: UserService) { 
    userServ.getProducts().subscribe((res)=>{
      this.userList=res;
      console.log(this.userList);
    })
  }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rewardlist',
  templateUrl: './rewardlist.component.html',
  styleUrls: ['./rewardlist.component.css']
})
export class RewardlistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor() { }

  ngOnInit(): void {
  }

  ngDestroy(){
    this.dtTrigger.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BranchService } from 'src/app/services/branch/branch.service';

@Component({
  selector: 'app-branchlist',
  templateUrl: './branchlist.component.html',
  styleUrls: ['./branchlist.component.css']
})
export class BranchlistComponent implements OnInit {

  branchlist:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private branch:BranchService
  ) { }

  ngOnInit(): void {

    this.branch.getBranches().subscribe((res)=>{
      this.branchlist=res.data;
      this.dtTrigger.next(this.branchlist);
      
    })

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}

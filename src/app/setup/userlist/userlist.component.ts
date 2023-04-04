import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;


  userList:User[]=[];
  dtOptions: any;
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private userServ: UserService) { 
   userServ.getAllUsers().subscribe(res=>{
     this.userList=res.data;
     this.dtTrigger.next(this.userList);
     console.log(this.userList);
   })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
          {
            extend: 'print',
            text: 'Print',
            className: 'btn btn-primary btn-sm'
          },
          {
            extend: 'csv',
            text: 'CSV',
            className: 'btn btn-primary btn-sm'
          },
          {
            extend: 'excel',
            text: 'Excel',
            className: 'btn btn-primary btn-sm'
          }
        ]
      }
    
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  printTable(): void {
    this.datatableElement.dtInstance.then((table) => {
      const allData = table.data();
      const rows = allData.length;
      // const columns = Array.from(table.table().header().querySelectorAll('th')).length;
      // const columns = Array.from((table.columns().header() as HTMLElement).querySelectorAll('th')).length;

    const  headers= [ '#No', 'Image', 'Name', 'Email', 'Phone No', 'Role', 'Status'

      ]
      const columns = headers.length;
      let tableData = '<table>';
      tableData += '<thead>';
      tableData += '<tr>';
      for (let i = 0; i < columns; i++) {
        tableData += '<th>' + headers[i] + '</th>';
      }
      tableData += '</tr>';
      tableData += '</thead>';
      tableData += '<tbody>';
      for (let i = 0; i < rows; i++) {
        tableData += '<tr>';
        for (let j = 0; j < columns; j++) {
          tableData += '<td>' + allData[i][j-1] + '</td>';
        }
        tableData += '</tr>';
      }
      tableData += '</tbody>';
      tableData += '</table>';
      const printContents = tableData;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = '<html><head><title></title></head><body>' + printContents + '</body></html>';
      window.print();
      document.body.innerHTML = originalContents;
    });
  }

 
  
}

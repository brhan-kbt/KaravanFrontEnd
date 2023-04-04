import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-subcategory-mgt',
  templateUrl: './subcategory-mgt.component.html',
  styleUrls: ['./subcategory-mgt.component.css']
})
export class SubcategoryMgtComponent implements OnInit {

  acategory:any;
  subcategories:any;
  id!:number;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtTrigger2: Subject<any> = new Subject();
  constructor( private category:CategoriesService,private activatedRoute:ActivatedRoute) {
    
     this.id=this.activatedRoute.snapshot.params['id'];
      this.category.getSubCategories().subscribe(res=>{
      this.subcategories=res.data;
      this.dtTrigger2.next(this.subcategories)
      console.log(this.subcategories);
      
    })

    this.category.getCategoryById(this.id).subscribe(res=>{
       this.acategory=res.data;
    })
   
   }

  ngOnInit(): void {
    
     
  }
 

}

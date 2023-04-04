import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Subject } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category-mgt',
  templateUrl: './category-mgt.component.html',
  styleUrls: ['./category-mgt.component.css']
})
export class CategoryMgtComponent implements OnInit {

  categories:any;
  subcategories:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtTrigger2: Subject<any> = new Subject();
  constructor( 
    private toast:NgToastService,
    private category:CategoriesService) { }

  ngOnInit(): void {
    
    this.category.getCategories().subscribe(res=>{
      this.categories=res.data;
      this.dtTrigger.next(this.categories)
    })

    this.category.getSubCategories().subscribe(res=>{
      this.subcategories=res.data;
      this.dtTrigger2.next(this.subcategories)
      console.log(this.subcategories);
      
    })
   
  }

  getCategoryName(categoryId: number) {
    // const subcategory = this.subcategories.find((s:any) => s.id === subcategoryId);
    const category = this.categories.find((c:any) => c.id === categoryId);
    console.log(category.name);
    return category.categoryName;
  }

  deleteCategory(id:number){
    this.category.deleteCategory(id).subscribe(res=>{
        this.toast.success({detail:"success", summary:"Category deleted Successfully!"});
       },err=>{
        this.toast.error({detail:"error", summary:"Something Went Wrong!"});
       } )
  }

}

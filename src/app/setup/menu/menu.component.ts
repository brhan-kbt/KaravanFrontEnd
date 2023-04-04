import { Component, OnInit } from '@angular/core';
import { Product3 } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  public items:any;
  public isLoadMoreVisible = false;
  public readonly numberOfRecordsOffset = 10;
  public totalNumberOfRecordsToShow = this.numberOfRecordsOffset;
  products:Product3[]=[]
  product:Product3[]=[];

  imageScr='../../../../assets/assets/images/block-10.jpg';


  constructor(private menuserv:ProductService) { }

  ngOnInit(): void {

    this.menuserv.getMenu().subscribe((res)=>{
      this.products=res;
      this.product=this.products;
      this.populateData(this.product);
      console.log(this.product);
      
    })
  }
  private populateData(data: any): void {
    this.items = data;
    this.isLoadMoreVisible = this.items.length > this.numberOfRecordsOffset;
  }

  changeImage(img :string){
    this.imageScr =  img;
  }

  public loadMoreButtonClicked(): void {
    this.totalNumberOfRecordsToShow += this.numberOfRecordsOffset;
    this.isLoadMoreVisible = this.totalNumberOfRecordsToShow < this.items.length;
  } 
}

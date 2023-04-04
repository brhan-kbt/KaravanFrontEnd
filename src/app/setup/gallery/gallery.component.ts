import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public items = [];
  public isLoadMoreVisible = false;
  public readonly numberOfRecordsOffset = 9;
  public totalNumberOfRecordsToShow = this.numberOfRecordsOffset;
  data:any[]=[];
  galleries:any[]=[];
  
  constructor(private gallery:GalleryService) {
    gallery.getGalleries().subscribe((res)=>{
      this.galleries=res;
      this.data=this.galleries;
      this.populateData(this.data);
  
    })
   }

  ngOnInit(): void {
  }

  private populateData(data: any): void {
    this.items = data;
    this.isLoadMoreVisible = this.items.length > this.numberOfRecordsOffset;
  }

  filter(category:string){
    this.data = this.galleries
    .filter((a:any)=>{
      if(a.typeofgallery == category || category==''){
        return a;
      }
    })
    this.populateData(this.data);
  }

  public loadMoreButtonClicked(): void {
    this.totalNumberOfRecordsToShow += this.numberOfRecordsOffset;
    this.isLoadMoreVisible = this.totalNumberOfRecordsToShow < this.items.length;
  }
}

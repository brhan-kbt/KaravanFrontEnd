import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-cake-page',
  templateUrl: './cake-page.component.html',
  styleUrls: ['./cake-page.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',
      [
        style({opacity:0}),
        animate(2000)
      ]
      
       
      )]
    )
  ]
})
export class CakePageComponent implements OnInit {

  ismuted:boolean=true;

  hello:any[]=[];
  public items = [];
  public isLoadMoreVisible = false;
  public readonly numberOfRecordsOffset = 13;
  public totalNumberOfRecordsToShow = this.numberOfRecordsOffset;
  data:any[]=[];
  galleries:any[]=[];
  
  constructor(private gallery:GalleryService) {

   this.hello=gallery.getCakes();
   console.log(this.hello);
   
    gallery.getGalleries().subscribe((res)=>{
      this.galleries=res;
      this.data=this.galleries;
      this.populateData(this.data);
      console.log(this.data);
      
  
    })
   }

  ngOnInit(): void {
  }

  

  muteVideo(){
    this.ismuted = !this.ismuted;
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


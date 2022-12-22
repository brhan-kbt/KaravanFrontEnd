import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  styleUrls: ['./gallerylist.component.css']
})
export class GallerylistComponent implements OnInit {
  galleryList:Gallery[]=[];
  constructor(private serv:GalleryService) {

      serv.getGalleries().subscribe((res)=>{
        this.galleryList=res;
      })
   }

  ngOnInit(): void {
  }

}

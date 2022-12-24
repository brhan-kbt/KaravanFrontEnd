import { Component, OnInit } from '@angular/core';
import { Gallery, Gallery2 } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  galleries:Gallery[]=[];
  
  constructor( private gallery:GalleryService) {
          gallery.getGalleries().subscribe((res)=>{
          this.galleries=res
   })
   }  
 
  ngOnInit(): void {
  }



}

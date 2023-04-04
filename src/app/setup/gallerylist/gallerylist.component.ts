import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  styleUrls: ['./gallerylist.component.css']
})
export class GallerylistComponent implements OnInit {
  galleryList:Gallery[]=[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private serv:GalleryService) {

      serv.getGalleriesForAdmin().subscribe((res)=>{
        this.galleryList=res.data;
        console.log();
        
        console.log(this.galleryList);
        
        this.dtTrigger.next(this.galleryList);
      })
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

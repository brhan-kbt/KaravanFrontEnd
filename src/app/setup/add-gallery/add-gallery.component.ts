import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.css']
})
export class AddGalleryComponent implements OnInit {

  addGalleryForm !: FormGroup;
  galleryObj!:Gallery;
  constructor(private fb:FormBuilder, private serv:GalleryService) { }

  ngOnInit(): void {

    this.addGalleryForm = this.fb.group({
      eventTitle:['',Validators.required],
      typeofgallery:['',Validators.required],
      eventDate:['',Validators.required],
      imagePath:['',Validators.required],
      description:['',Validators.required]
    })
  }

  onAddingGallery(){
    if(this.addGalleryForm.valid){
      this.galleryObj=this.addGalleryForm.value;
      this.galleryObj.imagePath="../../../../assets/assets/images/karavan-images/cakes/image-88.jpg";
      this.serv.saveGallery(this.galleryObj)
      .subscribe(res=>{
        console.log(res);
        alert("Saved")
      } 
      , err=>{
        alert('Something Wrong');
      }
      )
    }
    else{
      ValidateForm.validateAllFormFields(this.addGalleryForm);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
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
  photos!:File;
  constructor(private fb:FormBuilder,
    private toast:NgToastService,
     private serv:GalleryService) { }

  ngOnInit(): void {

    this.addGalleryForm = this.fb.group({
      title:['',Validators.required],
      type:['',Validators.required],
      date:['',Validators.required],
      image:['',Validators.required],
      description:['',Validators.required]
    })
  }

  onFileSelect(event: any) {
    this.photos=  <File>event.target.files[0];
    console.log(this.photos);
    
    }

  onAddingGallery(){
    if(this.addGalleryForm.valid){
      const formData = new FormData();
      formData.append('title', this.addGalleryForm.value.title);
      formData.append('type', this.addGalleryForm.value.type);      
      formData.append('date', this.addGalleryForm.value.date);      
      formData.append('description', this.addGalleryForm.value.description);      
      formData.append('image', this.photos);
      formData.append('imagePath', this.photos);

      // console.log(this.addGalleryForm.value.title);
      // console.log(this.addGalleryForm.value.type);
      // console.log(this.addGalleryForm.value.date);
      // console.log(this.addGalleryForm.value.description);
      // console.log(this.photos.name);

      console.log(formData);
      

      this.galleryObj=this.addGalleryForm.value;
      this.galleryObj.image=this.photos.name;
      // this.galleryObj.imagePath="../../../../assets/assets/images/karavan-images/cakes/image-88.jpg";
      console.log(this.galleryObj);
      
      this.serv.saveGallery(formData)
      .subscribe(res=>{
        console.log(res);
          this.toast.success({detail:"success", summary:"Gallery Added Successfully!"});
      } 
      , err=>{
        this.toast.success({detail:"error", summary:"Something Went Wrong!"});
      }
      )
    }
    else{
      ValidateForm.validateAllFormFields(this.addGalleryForm);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.css']
})
export class EditGalleryComponent implements OnInit {
  editGalleryForm !: FormGroup;
  galleryObj!:Gallery;
  GalleryFromDatabase:any; 
  photos!:File;
  constructor(private fb:FormBuilder,
    private toast:NgToastService,
     private serv:GalleryService,
     private activatedRoute:ActivatedRoute,

     ) { }

  ngOnInit(): void {
  
    this.editGalleryForm = this.fb.group({
      title:[''],
      type:[''],
      date:[''],
      image:[''],
      description:['']
    })

     const id= this.activatedRoute.snapshot.params['id'];
     console.log(id);
     
     this.serv.getGallerybyId(id).subscribe(res=>{
        this.GalleryFromDatabase=res.data;
       console.log(this.GalleryFromDatabase);
     })
     
  }

  onFileSelect(event: any) {
    this.photos=  <File>event.target.files[0];
    console.log(this.photos);
    
    }

  onEditingGallery(){
   
      const formData = new FormData();
      formData.append('title', (this.editGalleryForm.value.title !='')?this.editGalleryForm.value.title:this.GalleryFromDatabase.title);
      formData.append('type',  (this.editGalleryForm.value.type !='')?this.editGalleryForm.value.type:this.GalleryFromDatabase.type);      
      formData.append('date',  (this.editGalleryForm.value.date !='')?this.editGalleryForm.value.date:this.GalleryFromDatabase.date);      
      formData.append('description',  (this.editGalleryForm.value.description !='')?this.editGalleryForm.value.description:this.GalleryFromDatabase.description);      
      formData.append('image', this.photos);
      formData.append('imagePath', this.photos);

      console.log(formData);
      
      
      this.serv.updateGallery(formData, this.activatedRoute.snapshot.params['id'])
      .subscribe(res=>{
        console.log(res);
          this.toast.success({detail:"success", summary:"Gallery Updated Successfully!"});
      }, err=>{
            this.toast.success({detail:"error", summary:"Something Went Wrong!"});
      }
      )
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/service/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos;
  id;
  constructor(private photoService:PhotoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getAllPhotosForAlbum();
  }

  getAllPhotosForAlbum(){
    this.photoService.getPhotosFroAlbum(this.id).subscribe(data=>{
      this.photos=data;
      console.log(data)
    })
  }

}

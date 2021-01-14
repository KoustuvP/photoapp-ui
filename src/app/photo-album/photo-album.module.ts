import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoAlbumRoutingModule } from './photo-album-routing.module';
import { PhotoAlbumComponent } from './photo-album.component';
import { AlbumCardComponent } from './component/album-card/album-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PhotosComponent } from './photos/photos.component';
import { SharedModule } from '../common/shared.module';


@NgModule({
  declarations: [PhotoAlbumComponent, AlbumCardComponent, PhotosComponent],
  imports: [
    CommonModule,
    PhotoAlbumRoutingModule,
    AngularMaterialModule,
    SharedModule
    
  ]
})
export class PhotoAlbumModule { }

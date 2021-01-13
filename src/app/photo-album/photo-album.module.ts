import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoAlbumRoutingModule } from './photo-album-routing.module';
import { PhotoAlbumComponent } from './photo-album.component';


@NgModule({
  declarations: [PhotoAlbumComponent],
  imports: [
    CommonModule,
    PhotoAlbumRoutingModule
  ]
})
export class PhotoAlbumModule { }

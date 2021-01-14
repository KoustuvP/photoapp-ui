import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoAlbumComponent } from './photo-album.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path:'', component: PhotoAlbumComponent},
  { path:':id', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoAlbumRoutingModule { }

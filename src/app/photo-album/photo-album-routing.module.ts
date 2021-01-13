import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoAlbumComponent } from './photo-album.component';

const routes: Routes = [
  { path:'', component: PhotoAlbumComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoAlbumRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {

  albums: any;
  constructor(private albumService:AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe(data=>this.albums=data);
  }

}

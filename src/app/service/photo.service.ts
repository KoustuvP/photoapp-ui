import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private urlEndPoint=environment.apiEndpoint;
  constructor(private http:HttpClient) { }

  getPhotosFroAlbum(id:string){
    return this.http.get(`${this.urlEndPoint}/albums/${id}/photos`);
  }
}

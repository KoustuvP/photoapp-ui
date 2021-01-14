import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private urlEndPoint=environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  getAllAlbums():Observable<any> {
    return this.http.get(`${this.urlEndPoint}/albums`);
  }
}

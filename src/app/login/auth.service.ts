import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedin:BehaviorSubject<boolean>=new BehaviorSubject(false);
  private urlEndpoint;
  sb

  constructor(private http: HttpClient) { 
    this.urlEndpoint=environment.apiEndpoint;
    this.isLoggedin=new BehaviorSubject(false);
  }

  authenticate (data) {

     this.sb=this.http.post(`${this.urlEndpoint}`,data).subscribe(data=>{
      data?this.isLoggedin.next(true):this.isLoggedin.next(false);
      
    });

    
  }
  vs (){
      this.sb.unsubscribe()
  }
  get authentication() : Observable<boolean>{
    return this.isLoggedin.asObservable();
  }

}

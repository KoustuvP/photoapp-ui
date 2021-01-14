import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mockUrls } from '../mock/mock-url-config';

@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const {url,method,body,headers} = request;
    let responseData=mockUrls.find(mockurl=>mockurl.url==url)?.json;
    
    if(url=='mockserver/api/login')
    return  of(new HttpResponse({
      status:200,
      body: {
        role:'admin'
      }
    }))
    return of( new HttpResponse({
      status:200,
      body:responseData
    }));
    //return next.handle(request);
  }
}
